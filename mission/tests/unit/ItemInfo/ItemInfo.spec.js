import { mount } from '@vue/test-utils';
import ItemInfoPage from '@/views/ItemInfo.vue';

describe('ItemInfoPage', () => {
  it('renders ItemInfoPage', () => {
    const wrapper = mount(ItemInfoPage);

    expect(wrapper.find('#item-info-page').exists()).toBe(true);
  });

  it('renders seller image', () => {
    expect(wrapper.find('img[class="seller"]').exists()).toBe(true);
    });

  it('renders seller name', () => {
    expect(wrapper.find('span[class="sellerName"]').exists()).toBe(true);
    });
  
  it('renders seller name', () => {
    expect(wrapper.find('span[class="hashtag"]').exists()).toBe(true);
    });

});
