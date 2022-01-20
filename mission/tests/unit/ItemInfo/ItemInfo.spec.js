import { mount } from '@vue/test-utils';
import ItemInfoPage from '@/views/ItemInfo.vue';

describe('ItemInfoPage', () => {
  it('renders ItemInfoPage', () => {
    const wrapper = mount(ItemInfoPage);

    expect(wrapper.find('#item-info-page').exists()).toBe(true);
  });
});
  // it('renders product name on item', () => {
  //   const wrapper = mount(ItemInfoPage);
  //   await wrapper.setData({name: 'test product name'})
  // });

  // it('renders product name on item', () => {
  //   const wrapper = mount(ItemInfoPage.{
  //     data() {
  //       return {
  //         name: testProductName,
  //       };
  //     },
  //   });

  //   expect(wrapper.get('[data-test="product-name"]').text()).toBe(testProductName)
  // });    

  // it('render price on item', ()=> {
  //   const testPrice = 10000;
  //   const displayTestPrice = '10,000원';
  //   const wrapper = mount(ItemInfoPage, {
  //     data() {
  //       return {
  //         price: testPrice,
  //       };
  //     },
  //   });
  //   expect(wrapper.get('[data-test="product-price"]').text()).toBe(displayTestPrice)
  // });

  // it('render discounted price on item', ()=> {
  //   const testOriginalPrice = 10000;
  //   const displayOriginalPrice='10,000원';
  //   const testDiscountedPrice = '5000원';
  //   const displayDiscountedPrice= '5,000dnjs';
  //   const wrapper = mount(ItemInfoPage, {
  //     data() {
  //       return {
  //         price: testDiscountedPrice,
  //         original_test_price: testOriginalPrice,
  //       };
  //     },
  //   });
  //   expect(wrapper.get('[data-test="product-price"]').text()).toBe(testDiscountedPrice)
  //   expect(wrapper.get('[data-test="original-price"]').text()).toBe(displayOriginalPrice)
  // });

  // it('renders review', ()=> {
  //   const testReview = [ 
  //     {
  //       review_no: 1,
  //       writer: 'abc***'
  //       title: 'test title',
  //       description: 'test description',
  //       created: '2021. 01. 19',
  //     },
  //   ];
  //   const wrapper = mount(ItemInfoPage, {
  //     data() {
  //       return {
  //         reviews: testReview,
  //       };
  //     },
  //   }),
  // });
  //     for (let review in testReview) {
  //       expect(wrapper.get('[data-test="review-title"]'.text()).toBe(review.title)
  //       expect(wrapper.get('[data-test="review-description"]'.text()).toBe(review.description)
  //     }
  //   }, 
  // it('renders seller image', () => {
  //   expect(wrapper.find('img[class="seller"]').exists()).toBe(true);
  //   });

  // it('renders seller name', () => {
  //   expect(wrapper.find('span[class="sellerName"]').exists()).toBe(true);
  //   });
  
  // it('renders seller name', () => {
  //   expect(wrapper.find('span[class="hashtag"]').exists()).toBe(true);
  //   });

