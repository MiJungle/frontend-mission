import { mount } from '@vue/test-utils';
import ItemListItem from '@/components/ItemList/Item.vue';

describe('ItemListItem', () => {
  it('renders ItemListItem', () => {
    const wrapper = mount(ItemListItem);

    expect(wrapper.find('.item-list-item').exists()).toBe(true);
  });

  it('renders ItemListItem', () => {
    const wrapper = mount(ItemListItem);

    expect(wrapper.find('.productContainer').exists()).toBe(true);
  });

  it('renders ItemListItem', () => {
    const wrapper = mount(ItemListItem);

    expect(wrapper.find('.main').exists()).toBe(true);
  });
  it('renders product name on item', () => {
  const testProductName = 'test product name';
  const wrapper = mount(ItemListItem, {
    data() {
      return {
        name: testProductName,
      };
    },
  });

  expect(wrapper.get('[data-test="productName"]').text()).toBe(testProductName)
});
});
