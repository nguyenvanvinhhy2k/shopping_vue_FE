/* eslint-disable */
<template>
  <div class="app-container">
    <div class="app-breadcrumb">
      <div class="app-breadcrumb-wrap grid">
        <div class="app-breadcrumb-container row">
          <div class="col l-12 m-12 c-12">
            <div
              class="app-breadcrumb-content"
              style="
                background-image: url('/fontend/asset/images/source/o-BAKING-TOOLS-facebook.jpg');
              "
            >
              <div class="app-breadcrumb-content-title">
                <a class="app-breadcrumb-content-title-link">
                  <span>Trang Chủ</span>
                </a>
                <span class="app-breadcrumb-content-title-slash">/</span>
                <a class="app-breadcrumb-content-title-link">
                  <span>MÔ HÌNH TRANG TRÍ</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="app-product-detail">
      <div class="app-product-detail-wrap grid wide">
        <div class="app-product-detail-container row">
          <div class="col l-6 m-6 c-12">
            <div class="app-product-detail-slide">
              <div class="app-product-detail-slide-wrap slideshow-wrap">
                <img
                  style="width: 100%;"
                  :src="`/fontend/asset/images/slides/${productDetail.image}`"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="col l-6 m-6 c-12">
            <div class="app-product-detail-description">
              <div
                class="app-product-detail-description-name"
                style="line-height: 20px"
              >
                <span class="app-product-detail-description-name-label"
                  >Tên:</span
                >
                <h3>{{ productDetail.name }}</h3>
              </div>
              <div
                class="app-product-detail-description-price app-product-detail-description-price-sale--active"
              >
                <span class="app-product-detail-description-price-label"
                  >Giá:</span
                >
                <span class="app-product-detail-description-price-base">{{
                  Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(productDetail.originalPrice)
                }}</span>
                <span class="app-product-detail-description-price-sale">{{
                  Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(productDetail.price)
                }}</span>
              </div>
              <div class="app-product-detail-description-content">
                <p>
                  {{ productDetail.description }}
                </p>
              </div>
              <div class="app-product-detail-description-size">
                <span class="app-product-detail-description-size-label"
                  >Kích Thước:</span
                >
                <div class="app-product-detail-description-size-check">
                  <input
                    type="radio"
                    name="product-detail-description-size-check"
                    class="app-product-detail-description-size-check-input"
                    checked
                  />
                  <label
                    for=""
                    class="app-product-detail-description-size-check-label"
                    >S</label
                  >
                </div>
                <div class="app-product-detail-description-size-check">
                  <input
                    type="radio"
                    name="product-detail-description-size-check"
                    class="app-product-detail-description-size-check-input"
                  />
                  <label
                    for=""
                    class="app-product-detail-description-size-check-label"
                    >M</label
                  >
                </div>
                <div class="app-product-detail-description-size-check">
                  <input
                    type="radio"
                    name="product-detail-description-size-check"
                    class="app-product-detail-description-size-check-input"
                  />
                  <label
                    for=""
                    class="app-product-detail-description-size-check-label"
                    >L</label
                  >
                </div>
              </div>
              <div class="app-product-detail-description-quantity-cart">
                <span class="app-product-detail-description-quantity-cart-label"
                  >Số Lượng:</span
                >
                <div class="app-product-detail-description-quantity">
                  <div class="app-product-detail-description-quantity-minus">
                    <i class="ti-minus" @click="removeQuantity()"></i>
                  </div>
                  <div class="app-product-detail-description-quantity-label">
                    <span>{{ quantity }}</span>
                  </div>
                  <div class="app-product-detail-description-quantity-plus">
                    <i class="ti-plus" @click="addQuantity()"></i>
                  </div>
                </div>
              </div>
              <div
                class="btn app-product-detail-description-add-cart"
                @click="addToCart(productDetail)"
              >
                Thêm Vào Giỏ Hàng
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="app-content">
      <div class="app_content-wrap grid wide">
        <div class="row app_content-wrap-container">
          <div class="col l-12 c-12 m-12">
            <div class="row">
              <div class="list-product__header col l-12 c-12 m-12">
                <div class="list-product__header-title">
                  <h3>Sản phẩm liên quan</h3>
                </div>
              </div>
              <div class="list-product__body col l-12 c-12 m-12">
                <div class="row">
                  <div
                    class="list-product__body-items col l-3 c-6 m-6"
                    v-for="productRelation in productRelations"
                    :key="productRelation.id"
                  >
                    <div class="list-product__body-items-wrap">
                      <div class="list-product__body-items-thumbnail">
                        <a class="list-product__body-items-thumbnail-link">
                          <div class="list-product__body-items-thumbnail-img">
                            <img
                              style="width: 100%"
                              :src="`/fontend/asset/images/slides/${productRelation.image}`"
                              alt=""
                            />
                          </div>
                        </a>

                        <div class="list-product__actions">
                          <div class="list-product__actions-view">
                            <div class="list-product__actions-view-title">
                              Xem Nhanh
                            </div>
                            <div
                              class="list-product__actions-view-icon btn-modal-active"
                              data-modal="quickview"
                            >
                              <i class="ti-eye"></i>
                            </div>
                          </div>
                          <div class="list-product__actions-cart">
                            <div class="list-product__actions-cart-tilte">
                              Mua Hàng
                            </div>
                            <div
                              class="list-product__actions-cart-icon btn-modal-active"
                              data-modal="cart"
                            >
                              <i class="ti-shopping-cart"></i>
                            </div>
                          </div>
                        </div>
                        <div class="list-product__actions-mobile">
                          <div class="list-product__actions-mobile-view">
                            <div
                              class="list-product__actions-mobile-view-icon btn-modal-active"
                              data-modal="quickview"
                            >
                              <i class="ti-eye"></i>
                            </div>
                          </div>
                          <div
                            class="list-product__actions-mobile-cart btn-modal-active"
                            data-modal="cart"
                          >
                            <div class="list-product__actions-mobile-cart-icon">
                              <i class="ti-shopping-cart"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="list-product__body-items-description">
                        <a
                          href="./product-detail.html"
                          class="list-product__body-items-description-name"
                          >{{ productRelation.name }}</a
                        >
                        <div
                          class="list-product__body-items-description-price list-product__body-items-description-price-sale--active"
                        >
                          <span
                            class="list-product__body-items-description-price-base"
                            >{{
                              Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              }).format(productRelation.originalPrice)
                            }}</span
                          >
                          <span
                            class="list-product__body-items-description-price-sale"
                            >{{
                              Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              }).format(productRelation.price)
                            }}</span
                          >
                        </div>
                      </div>
                      <div
                        class="list-product__like list-product__like--active"
                      >
                        <div class="list-product__like-icon">
                          <i class="ti-heart"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="list-product__footer col l-12 c-12 m-12">
                <div class="list-product__footer-content">
                  <a class="btn list-product__footer-content-load-move"
                    >Xem Thêm</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductComponent",
  data() {
    return {
      id: this.$route.params.id,
      quantity: 1,
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    this.$store.dispatch("getProduct", this.id);
  },
  computed: {
    productDetail() {
      return this.$store.state.product;
    },
    productRelations() {
      return this.$store.state.productRelation;
    },
  },
  methods: {
    removeQuantity() {
      this.quantity--;
    },
    addQuantity() {
      this.quantity++;
    },
    addToCart(product) {
      alert("Đã thêm vào giỏ hàng");
      this.$store.dispatch("addToCart", { product, quantity: this.quantity });
    },
  },
};
</script>

<style scoped></style>
