<template>
  <header class="header">
    <div class="grid wide">
      <div class="header-container row">
        <div class="header-menu-bar col l-0 m-4 c-4">
          <a
            class="header-menu-bar__icon btn-modal-active"
            data-modal="menu-mobile"
          >
            <i class="ti-menu"></i>
          </a>
        </div>
        <div class="header-logo col l-3 m-4 c-4">
          <div class="header-logo-wrap">
            <a class="header-logo-link" style="margin: 0 auto">
              <img
                src="/fontend/asset/images/source/cipershop.jpg"
                class="header-logo-link-img"
              />
            </a>
          </div>
        </div>

        <div class="header-menu col l-6 m-0 c-0">
          <ul class="header-menu__list">
            <li class="header-menu__list-items header-menu__list-items--acrive">
              <router-link :to="{ name: 'Home' }">
                <a class="header-menu__list-items-link">Trang Chủ</a>
              </router-link>
            </li>

            <li class="header-menu__list-items">
              <a class="header-menu__list-items-link">Cửa Hàng</a>

              <ul class="header-submenu__list">
                <li
                  v-for="category in categories"
                  :key="category.id"
                  class="header-submenu__list-items header-submenu__list-items--active"
                >
                  <router-link
                    :to="{ name: 'Category', params: { id: category.id } }"
                  >
                    <a
                      @click="moveCategoryId(category.id)"
                      class="header-submenu__list-items-link"
                      >{{ category.name }}</a
                    >
                  </router-link>
                </li>
              </ul>
            </li>

            <li class="header-menu__list-items">
              <router-link :to="{ name: 'Info' }">
                <a class="header-menu__list-items-link">Giới Thiệu</a>
              </router-link>
            </li>

            <li class="header-menu__list-items">
              <router-link :to="{ name: 'New' }">
                <a class="header-menu__list-items-link">Tin Tức</a>
              </router-link>
            </li>

            <li class="header-menu__list-items">
              <router-link :to="{ name: 'Contact' }">
                <a class="header-menu__list-items-link">Liên Hệ</a>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="header-group-btn col l-3 m-4 c-4">
          <ul class="header-group-btn__list">
            <li class="header-group-btn__list-items">
              <a
                class="header-group-btn__list-items-link header-group-btn__list-items-search btn-modal-active"
                data-modal="search"
              >
                <i
                  @click="isSearch = !isSearch"
                  class="header-group-btn__list-items-link-icon ti-search"
                ></i>
              </a>
            </li>
            <li class="header-group-btn__list-items">
              <router-link
                :to="{ name: 'Login' }"
                class="header-group-btn__list-items-link header-group-btn__list-items-auth btn-modal-active"
                data-modal="auth"
              >
                <i class="header-group-btn__list-items-link-icon ti-user"></i>
              </router-link>
            </li>
            <li class="header-group-btn__list-items">
              <a
                class="header-group-btn__list-items-link header-group-btn__list-items-like btn-modal-active"
                data-modal="like"
              >
                <i
                  @click="isLike = !isLike"
                  class="header-group-btn__list-items-link-icon ti-heart"
                ></i>
                <span class="header-group-btn__list-items-like-count">2</span>
              </a>
            </li>
            <li class="header-group-btn__list-items">
              <a
                class="header-group-btn__list-items-link header-group-btn__list-items-cart btn-modal-active"
                data-modal="cart"
              >
                <router-link :to="{ name: 'Cart' }">
                  <i
                    @click="move()"
                    class="header-group-btn__list-items-link-icon ti-shopping-cart"
                  ></i>
                </router-link>
                <span class="header-group-btn__list-items-cart-count">{{
                  cartCount
                }}</span>
              </a>
            </li>
            <li class="header-group-btn__list-items" v-if="user">
              <a
                class="header-group-btn__list-items-link header-group-btn__list-items-cart btn-modal-active"
              >
                <a href="javascript:void(0)" @click="logout">
                  <i
                    class="header-group-btn__list-items-link-icon ti-shift-left"
                  ></i>
                </a>
              </a>
            </li>
            <li class="header-group-btn__list-items" v-if="(user = !null)">
              <a
                style="margin-left: -7px"
                class="header-group-btn__list-items-link header-group-btn__list-items-cart btn-modal-active"
              >
                <p>{{ user }}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
      class=""
      style="
        position: fixed;
        z-index: 998;
        width: 35%;
        top: 0;
        right: 0;
        background: aliceblue;
      "
      v-if="isSearch === true"
    >
      <form action="" class="modal-search__form">
        <div class="modal-search__form-header">
          <div class="modal-search__form-header-title">Tìm Kiếm</div>
          <div
            class="modal-search__form-close modal-close"
            @click="isSearch = !isSearch"
          >
            <i class="ti-close"></i>
          </div>
        </div>
        <div class="modal-search__form-content">
          <div class="modal-search__form-content-wrap">
            <div class="modal-search__form-content-row">
              <select
                name=""
                id="modal-search__form-select"
                class="modal-search__form-select"
              >
                <option value="*">Tất cả sản phẩm</option>
                <option value="*">Mô hình BanDai</option>
                <option value="*">Mô hình Dragon Ball</option>
                <option value="*">Mô hình One Piece</option>
                <option value="*">Mô hình Naruto</option>
              </select>
            </div>
          </div>
          <div class="modal-search__form-content-wrap">
            <div
              class="modal-search__form-content-row modal-search__form-content-input"
            >
              <input
                type="text"
                name=""
                id="modal-search__form-content-input"
                placeholder="Từ Khóa"
                @input="handleInput"
              />
              <button type="submit"><i class="ti-search"></i></button>
            </div>
          </div>
        </div>
      </form>
      <div class="modal-search__results">
        <div class="modal-search__results-header">Kết quả tìm kiếm</div>
        <div class="modal-search__results-content">
          <ul class="modal-search__results-content-list" style="height: 460px">
            <li
              class="modal-search__results-content-list-items"
              v-for="product in getFilterProducts"
              :key="product.id"
            >
              <a href="" class="modal-search__results-content-list-items-link">
                <div class="modal-search__results-content-list-items-thumbnail">
                  <img
                    style="width: 100%; height: 100px"
                    :src="`/fontend/asset/images/slides/${product.image}`"
                    alt=""
                  />
                </div>
                <div
                  class="modal-search__results-content-list-items-description"
                >
                  <div
                    class="modal-search__results-content-list-items-description-name"
                  >
                    {{ product.name }}
                  </div>
                  <div
                    class="modal-search__results-content-list-items-description-price"
                  >
                    {{
                      Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(product.price)
                    }}
                  </div>
                  <router-link
                    :to="{ name: 'ProductDetail', params: { id: product.id } }"
                  >
                    <div
                      @click="isSearch = !isSearch"
                      class="modal-search__results-content-list-items-btn btn"
                    >
                      Chi Tiết
                    </div>
                  </router-link>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
      class="content-like"
      style="
        position: fixed;
        width: 40%;
        top: 12.5%;
        background: azure;
        z-index: 999;
        right: 0;
      "
      v-if="isLike === true"
    >
      <div class="modal-like__header">
        <div class="modal-like__header-title">Yêu Thích</div>
        <div class="modal-like__header-close modal-close">
          <i class="ti-close" @click="isLike = !isLike"></i>
        </div>
      </div>
      <div class="modal-like__content">
        <div class="modal-like__content-wrap">
          <ul class="modal-like__list">
            <li class="modal-like-items">
              <div class="modal-like-items-content">
                <a href="./product-detail.html" class="modal-like-items-link">
                  <div
                    class="modal-like-items-thumbnail"
                    style="
                      background-image: url('./asset/images/product/IMG_1134.jpg');
                    "
                  ></div>
                </a>
                <div class="modal-like-items-description">
                  <a
                    href="./product-detail.html"
                    class="modal-like-items-description-name"
                    >Mô hình</a
                  >
                  <div class="modal-like-items-description-price">
                    150.000<span>₫</span>
                  </div>
                  <a
                    href="./product-detail.html"
                    class="btn modal-like-items-description-view-detail"
                    >Chi Tiết</a
                  >
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      isLike: false,
      isSearch: false,
      search: "",
    };
  },
  watch: {
    search: {
      handler(val) {
        let newFilterProducts = [];
        if (val !== "") {
          newFilterProducts = this.products.filter((product) =>
            product.name.toLowerCase().includes(val.toLowerCase())
          );
        } else {
          newFilterProducts = JSON.parse(JSON.stringify(this.products));
        }
        this.setFilterProducts(newFilterProducts);
      },
      immediate: true,
    },
  },
  async created() {
    await this.getProducts;
  },
  mounted() {
    this.$store.dispatch("getCategories");
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    ...mapGetters({
      getFilterProducts: "getFilterProducts",
    }),
    categories() {
      return this.$store.state.categories;
    },
    cartCount() {
      return this.$store.getters.cartItemCount;
    },
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    ...mapMutations({
      setFilterProducts: "SET_FILTER_PRODUCTS",
    }),
    handleInput(e) {
      this.search = e.target.value;
    },
    moveCategoryId(id) {
      this.$store.dispatch("getCategoryId", id);
    },
    logout() {
      localStorage.removeItem("user");
      this.$store.state.user = null;
      this.$router.push("/login");
    },
    move() {
      window.scrollTo(0, 0);
      this.$route.push("/cart");
    },
  },
};
</script>

<style scoped></style>
