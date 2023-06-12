import { FilterIcon } from '../../ui/icons/filter-big-icon';
import { IIconProps } from '../../ui/icons/utils';

export default {
  title: 'UI/Icons',

  component: FilterIcon,
  argTypes: {
    color: {
      type: 'string',
      description: 'Цвет контура для svg иконки',
      defaultValue: 'dark-blue',
      options: [
        'dark-blue',
        'white',
        `popup`,
        `inactive`,
        `partsPrimary`,
        `partsSecondary`,
        `partsActivePrimary`,
        `partsActiveSecondary`,
        `partsActiveAdditional`,
      ],
      mapping: {
        popup: '#fff',
        inactive: '#818c99',
        partsPrimary: '#2e3192',
        partsSecondary: '#9798c9',
        partsActivePrimary: '#0071bc',
        partsActiveSecondary: '#0091c7',
        partsActiveAdditional: '#00a99d',
      },
      control: {
        type: 'radio',
      },
    },
  },
  parameters: {
    backgrounds: {
      default: 'grey',
      values: [
        {
          name: 'grey',
          value: '#DCDCDC',
        },
        {
          name: 'white',
          value: '#fff',
        },
        {
          name: 'black',
          value: '#000',
        },
      ],
    },
  },
};

// export const ActiveRequest = () => (
//   <ActiveRequestVersion1Icon color="dark-blue" />
// );

const Template = (args: IIconProps) => (
  <div
    style={{
      width: '43px',
      height: '44px',
    }}
  >
    <FilterIcon {...args} />
  </div>
);

export const Filter = Template.bind({});