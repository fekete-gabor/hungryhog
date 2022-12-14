import { useEffect } from "react";
import { BiChevronsLeft, BiChevronsRight, CgCloseR } from "../utils/icons";
import {
  changeCurrentItem,
  prevItem,
  nextItem,
} from "../features/gallery/gallerySlice";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { isModalClose } from "../features/modal/modalSlice";
import { gsap } from "gsap/dist/gsap";
import { Draggable } from "gsap/dist/Draggable";
gsap.registerPlugin(Draggable);

const Modal = () => {
  const { images, current_image, current_index } = useSelector(
    (store) => store.gallery
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const colors = ["#f38630", "#6fb936", "#ccc", "#6fb936"];
    const images = gsap.utils.toArray(".img");
    gsap.set(images, {
      backgroundColor: gsap.utils.wrap(colors),
    });

    const loop = horizontalLoop(images, {
      paused: true,
      draggable: true,
    });

    images.forEach((img, i) =>
      img.addEventListener("click", () =>
        loop.toIndex(i, { duration: 0.8, ease: "power1.inOut" })
      )
    );

    document
      .querySelector(".next")
      .addEventListener("click", () =>
        loop.next({ duration: 0.4, ease: "power1.inOut" })
      );
    document
      .querySelector(".prev")
      .addEventListener("click", () =>
        loop.previous({ duration: 0.4, ease: "power1.inOut" })
      );

    function horizontalLoop(items, config) {
      items = gsap.utils.toArray(items);
      config = config || {};
      let onChange = config.onChange,
        lastIndex = 0,
        tl = gsap.timeline({
          repeat: config.repeat,
          onUpdate:
            onChange &&
            function () {
              let i = tl.closestIndex();
              if (lastIndex !== i) {
                lastIndex = i;
                onChange(items[i], i);
              }
            },
          paused: config.paused,
          defaults: { ease: "none" },
          onReverseComplete: () =>
            tl.totalTime(tl.rawTime() + tl.duration() * 100),
        }),
        length = items.length,
        startX = items[0].offsetLeft,
        times = [],
        widths = [],
        spaceBefore = [],
        xPercents = [],
        curIndex = 0,
        center = config.center,
        pixelsPerSecond = (config.speed || 1) * 100,
        snap =
          config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1),
        timeOffset = 0,
        container =
          center === true
            ? items[0].parentNode
            : gsap.utils.toArray(center)[0] || items[0].parentNode,
        totalWidth,
        getTotalWidth = () =>
          items[length - 1].offsetLeft +
          (xPercents[length - 1] / 100) * widths[length - 1] -
          startX +
          spaceBefore[0] +
          items[length - 1].offsetWidth *
            gsap.getProperty(items[length - 1], "scaleX") +
          (parseFloat(config.paddingRight) || 0),
        populateWidths = () => {
          let b1 = container.getBoundingClientRect(),
            b2;
          items.forEach((el, i) => {
            widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
            xPercents[i] = snap(
              (parseFloat(gsap.getProperty(el, "x", "px")) / widths[i]) * 100 +
                gsap.getProperty(el, "xPercent")
            );
            b2 = el.getBoundingClientRect();
            spaceBefore[i] = b2.left - (i ? b1.right : b1.left);
            b1 = b2;
          });
          gsap.set(items, {
            xPercent: (i) => xPercents[i],
          });
          totalWidth = getTotalWidth();
        },
        timeWrap,
        populateOffsets = () => {
          timeOffset = center
            ? (tl.duration() * (container.offsetWidth / 2)) / totalWidth
            : 0;
          center &&
            times.forEach((t, i) => {
              times[i] = timeWrap(
                tl.labels["label" + i] +
                  (tl.duration() * widths[i]) / 2 / totalWidth -
                  timeOffset
              );
            });
        },
        getClosest = (values, value, wrap) => {
          let i = values.length,
            closest = 1e10,
            index = 0,
            d;
          while (i--) {
            d = Math.abs(values[i] - value);
            if (d > wrap / 2) {
              d = wrap - d;
            }
            if (d < closest) {
              closest = d;
              index = i;
            }
          }
          return index;
        },
        populateTimeline = () => {
          let i, item, curX, distanceToStart, distanceToLoop;
          tl.clear();
          for (i = 0; i < length; i++) {
            item = items[i];
            curX = (xPercents[i] / 100) * widths[i];
            distanceToStart = item.offsetLeft + curX - startX + spaceBefore[0];
            distanceToLoop =
              distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
            tl.to(
              item,
              {
                xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
                duration: distanceToLoop / pixelsPerSecond,
              },
              0
            )
              .fromTo(
                item,
                {
                  xPercent: snap(
                    ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
                  ),
                },
                {
                  xPercent: xPercents[i],
                  duration:
                    (curX - distanceToLoop + totalWidth - curX) /
                    pixelsPerSecond,
                  immediateRender: false,
                },
                distanceToLoop / pixelsPerSecond
              )
              .add("label" + i, distanceToStart / pixelsPerSecond);
            times[i] = distanceToStart / pixelsPerSecond;
          }
          timeWrap = gsap.utils.wrap(0, tl.duration());
        },
        refresh = (deep) => {
          let progress = tl.progress();
          tl.progress(0, true);
          populateWidths();
          deep && populateTimeline();
          populateOffsets();
          deep && tl.draggable
            ? tl.time(times[curIndex], true)
            : tl.progress(progress, true);
        },
        proxy;
      gsap.set(items, { x: 0 });
      populateWidths();
      populateTimeline();
      populateOffsets();
      window.addEventListener("resize", () => refresh(true));
      function toIndex(index, vars) {
        vars = vars || {};
        Math.abs(index - curIndex) > length / 2 &&
          (index += index > curIndex ? -length : length);
        let newIndex = gsap.utils.wrap(0, length, index),
          time = times[newIndex];
        // eslint-disable-next-line
        if (time > tl.time() !== index > curIndex) {
          time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        if (time < 0 || time > tl.duration()) {
          vars.modifiers = { time: timeWrap };
        }
        curIndex = newIndex;
        vars.overwrite = true;
        gsap.killTweensOf(proxy);
        return tl.tweenTo(time, vars);
      }
      tl.next = (vars) => toIndex(curIndex + 1, vars);
      tl.previous = (vars) => toIndex(curIndex - 1, vars);
      tl.current = () => curIndex;
      tl.toIndex = (index, vars) => toIndex(index, vars);
      tl.closestIndex = (setCurrent) => {
        let index = getClosest(times, tl.time(), tl.duration());
        setCurrent && (curIndex = index);
        return index;
      };
      tl.times = times;
      tl.progress(1, true).progress(0, true);
      if (config.reversed) {
        tl.vars.onReverseComplete();
        tl.reverse();
      }
      if (config.draggable && typeof Draggable === "function") {
        proxy = document.createElement("div");
        let wrap = gsap.utils.wrap(0, 1),
          ratio,
          startProgress,
          draggable,
          align = () =>
            tl.progress(
              wrap(startProgress + (draggable.startX - draggable.x) * ratio)
            ),
          syncIndex = () => tl.closestIndex(true);
        draggable = Draggable.create(proxy, {
          trigger: items[0].parentNode,
          type: "x",
          onPressInit() {
            gsap.killTweensOf(tl);
            startProgress = tl.progress();
            refresh();
            ratio = 1 / totalWidth;
            gsap.set(proxy, { x: startProgress / -ratio });
          },
          onDrag: align,
          onThrowUpdate: align,
          inertia: true,
          snap: (value) => {
            let time = -(value * ratio) * tl.duration(),
              wrappedTime = timeWrap(time),
              snapTime = times[getClosest(times, wrappedTime, tl.duration())],
              dif = snapTime - wrappedTime;
            Math.abs(dif) > tl.duration() / 2 &&
              (dif += dif < 0 ? tl.duration() : -tl.duration());
            return (time + dif) / tl.duration() / -ratio;
          },
          onRelease: syncIndex,
          onThrowComplete: syncIndex,
        })[0];
        tl.draggable = draggable;
      }
      tl.closestIndex(true);
      onChange && onChange(items[curIndex], curIndex);
      return tl;
    }
  }, []);

  return (
    <Wrapper>
      <div className="close-icon" onClick={() => dispatch(isModalClose())}>
        <CgCloseR />
      </div>
      <div className="container">
        <header>
          <BiChevronsLeft
            className="prev"
            onClick={() => dispatch(prevItem())}
          />
          <img
            src={current_image.attributes.url}
            alt="main"
            className="current"
          />
          <BiChevronsRight
            className="next"
            onClick={() => dispatch(nextItem())}
          />
        </header>
        <footer className="wrapper">
          {images.map((img, i) => {
            const { id } = img;
            const { name, url } = img.attributes;

            return (
              <div
                key={id}
                className={current_index === i ? "active img" : "img"}
                onClick={() => dispatch(changeCurrentItem(i))}
              >
                <img src={url} alt={name} />
              </div>
            );
          })}
        </footer>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #222;
  user-select: none;
  position: fixed;
  top: 0;

  .container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }

  .close-icon {
    position: absolute;
    top: 15px;
    right: 15px;
    color: var(--primary-clr-5);
    font-size: 2rem;
    z-index: 1;
    cursor: pointer;
    transition: var(--transition);
    &:hover {
      color: red;
    }
  }

  .img {
    filter: grayscale(100%);
  }

  .active {
    filter: grayscale(0%);
  }

  header {
    width: 100%;
    height: calc(100% - 100px);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    svg {
      position: absolute;
      top: 50%;
      font-size: 3rem;
      color: #fc3;
      cursor: pointer;
      display: block;
      z-index: 1;
      transition: var(--transition);
      background: linear-gradient(rgba(1, 1, 1, 0.5), rgba(1, 1, 1, 0.5));
      &:hover {
        color: var(--primary-clr-5);
      }
    }
    img {
      width: 100%;
      max-height: 800px;
      object-fit: scale-down;
    }
  }

  .prev {
    left: 20px;
  }
  .next {
    right: 20px;
  }

  footer {
    background-color: #222;
    height: fit-content;
    margin: 0 auto;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    img {
      width: 100px;
      height: 100px;
      object-fit: cover;
      cursor: pointer;
    }
  }
`;

export default Modal;
