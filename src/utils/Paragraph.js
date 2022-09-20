const paragraphArray = [
  {
    // 59 words 394 characters
    id: 1,
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar ex quis urna porttitor aliquam. In justo dui, condimentum a tincidunt at, ultrices non ex. Suspendisse sollicitudin fringilla dui, ut malesuada mauris mattis nec. Duis id lobortis felis, id sollicitudin quam. Cras quis nulla nibh. In mattis justo vitae ultrices vehicula. Vestibulum vel rhoncus orci. Nullam sed magna orci.",
  },
  {
    // 113 words 763 characters
    id: 2,
    paragraph:
      "Aliquam et mi quis ipsum dictum elementum. Phasellus quis porttitor tortor, at consequat purus. Etiam est ex, malesuada sed nibh ultricies, lobortis dapibus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas posuere eros, et auctor lorem suscipit quis. Pellentesque ultrices neque sit amet justo lobortis, laoreet fermentum orci sagittis. Ut a consequat orci, at ullamcorper turpis. Sed gravida magna orci, ac tempor sapien ornare a. Donec condimentum nisi non semper ultrices. Ut interdum, est eu eleifend dapibus, nisi felis porta elit, nec ornare lorem velit ut enim. Maecenas vitae arcu nisl. Aenean aliquam fermentum tincidunt. Sed condimentum urna sed pulvinar laoreet. Vivamus laoreet bibendum lorem, et viverra augue consectetur in.",
  },
  {
    // 67 words 385 characters
    id: 3,
    paragraph:
      "Nulla in enim in mi suscipit dictum nec in est. In vel vestibulum lacus, et maximus ipsum. Aliquam eget mattis velit. Sed dui erat, hendrerit vel diam quis, auctor imperdiet leo. Cras eget ex porta lectus euismod dictum non ac massa. Donec varius ex ex, vel laoreet odio laoreet vitae. Nam sapien dui, porta vitae erat sed, venenatis lobortis quam. Ut in dui eget libero semper cursus.",
  },
  {
    // 106 words 716 characters
    id: 4,
    paragraph:
      "Fusce consectetur odio justo, sit amet hendrerit ante iaculis non. Vivamus efficitur lobortis felis in rutrum. Nam tincidunt pharetra augue, et tempus ligula ullamcorper a. Donec eget tellus sed diam egestas elementum. Ut sit amet dignissim purus. Integer maximus vestibulum facilisis. Nulla varius molestie iaculis. Vestibulum metus quam, facilisis quis rhoncus sed, ullamcorper at eros. Nunc placerat, mi sed placerat vulputate, mi urna vestibulum sapien, a mollis arcu sem in sapien. Nam et hendrerit ex, sit amet ornare dolor. Curabitur ut tempor lectus. Aenean condimentum lacinia diam et vehicula. Praesent mattis dolor quis risus mattis pharetra. In id tellus arcu. Vestibulum imperdiet at odio quis ultrices.",
  },
  {
    // 100 words 706 characters
    id: 5,
    paragraph:
      "Morbi sit amet erat lorem. Maecenas cursus pulvinar lacinia. Proin efficitur molestie lorem placerat eleifend. Sed iaculis quam sed tortor mattis, ut ultricies ipsum facilisis. Ut blandit lacinia accumsan. Pellentesque a sollicitudin dui. Sed rhoncus imperdiet elit, eu malesuada augue consectetur sed. Suspendisse at leo mattis, consectetur nisi et, finibus nulla. Maecenas vestibulum justo id velit aliquet, non tempor risus porta. Quisque faucibus nec ligula et finibus. Vestibulum ac facilisis lacus, quis bibendum lorem. Maecenas imperdiet quam id nulla interdum, at pellentesque felis ullamcorper. Donec dapibus, ligula id volutpat gravida, enim elit molestie est, non rhoncus massa enim vitae lorem.",
  },
];

const LoremIpsum = ({ amount, className }) => {
  let temp;

  if (isNaN(amount) || amount < 0 || amount > paragraphArray.length) {
    temp = paragraphArray.slice(0, 1);
  } else {
    temp = paragraphArray.slice(0, amount);
  }

  return temp.map((item) => {
    const { id, paragraph } = item;

    return (
      <p key={id} className={className && className}>
        {paragraph}
      </p>
    );
  });
};

export default LoremIpsum;
