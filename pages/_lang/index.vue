<template>
  <div class="p-home">
    <div class="p-home--background"></div>

    <v-container class="p-home--content primary-text--text">
      <!-- carousel and and auth form -->
      <v-row>
        <v-col lg="6" md="12">
          <h1 class="text-shadow text-center white--text mb-8">
            {{ $t('home.title') }}
          </h1>

          <!-- carousel -->
          <div class="elevation-2">
            <v-carousel
              class="p-home--slider"
              hide-delimiter-background
              dark
              height="480"
              :show-arrows="false"
            >
              <v-carousel-item
                v-for="(slide, i) in carousel"
                :key="i"
                class="p-home--slide"
              >
                <div class="p-home--slide-content">
                  <!-- slide img -->
                  <div :class="['p-home--slide-img', { multiple: slide.companyImg }]">
                    <v-avatar
                      :size="slide.companyImg ? 60 : 90"
                      class="elevation-2 p-home--slide-avatar"
                    >
                      <img :src="getImgUrl(slide.img, 'png')" alt="" />
                    </v-avatar>

                    <!-- show second img only if it exist -->
                    <v-avatar
                      v-if="slide.companyImg"
                      size="90"
                      class="elevation-2 p-home--slide-avatar"
                    >
                      <img :src="getImgUrl(slide.companyImg, 'png')" alt="" />
                    </v-avatar>
                  </div>

                  <!-- slide title -->
                  <p class="p-home--slide-title">
                    <b class="d-block">{{ slide.name }}</b>
                    {{ slide.position }}
                  </p>

                  <!-- slide description -->
                  <p class="p-home--slide-description">
                    {{ slide.description }}
                  </p>
                </div>
              </v-carousel-item>
            </v-carousel>
          </div>
        </v-col>

        <!-- registration form -->
        <v-col lg="4" md="8" offset-md="2">
          <form class="p-home--form">
            <!-- form title -->
            <h3 class="p-home--form-title">
              {{ $t('home.registrationForm.title') }}
            </h3>

            <!-- form description -->
            <p class="p-home--form-description">
              {{ $t('home.registrationForm.description') }}
            </p>

            <!-- social btn registration -->
            <v-btn class="primary-text--text">
              <v-icon
                size="18"
                color="primary-text"
                class="mr-2"
              >
                mdi-google
              </v-icon>
              {{ rf.googleButton }}
            </v-btn>

            <v-btn class="primary-text--text">
              <v-icon
                size="18"
                color="primary-text"
                class="mr-2"
              >
                mdi-facebook
              </v-icon>
              {{ rf.facebookButton }}
            </v-btn>

            <p class="mb-0">
              {{ rf.underButtonText }}
            </p>

            <!-- fields -->
            <v-text-field
              v-model="form.firstName"
              v-validate="'required'"
              class="p-home--form-field"
              type="text"
              :label="rf.nameLabel"
            />

            <v-text-field
              v-model="form.lastName"
              v-validate="'required'"
              class="p-home--form-field"
              type="text"
              :label="rf.lastNameLabel"
            />

            <v-text-field
              v-model="form.lastName"
              v-validate="'required|email'"
              class="p-home--form-field"
              type="email"
              :label="rf.emailLabel"
            />

            <!-- small description -->
            <p>
              <small>{{ rf.smallDescription }}</small>
            </p>

            <!-- form footer -->
            <div class="p-home--form-footer">
              <!-- submit btn -->
              <v-btn color="primary" class="mb-5">
                {{ rf.submitButton }}
              </v-btn>

              <!-- forgot password -->
              <v-btn text class="text-uppercase primary-text--text mb-0">
                {{ rf.forgotPassword }}
              </v-btn>
            </div>
          </form>
        </v-col>
      </v-row>

      <!-- jobs section -->
      <v-row class="p-home--jobs">
        <v-col>
          <v-card
            v-for="(job, i) in jobs"
            :key="i"
            class="p-home--long-card mb-6"
          >
            <v-img
              :src="getImgUrl(job.bg, 'jpg')"
              class="p-home--long-card-bg white--text align-end"
              height="180"
            >
              <v-card-title class="text-shadow">
                <b>{{ job.position }}</b>
              </v-card-title>
            </v-img>

            <div class="p-home--long-card-description">
              <v-card-text class="p-home--long-card-info d-flex align-center">
                <v-avatar
                  size="90"
                  class="elevation-2"
                >
                  <img
                    :src="getImgUrl(job.brandImg, 'png')"
                    alt="Brand Logo"
                  />
                </v-avatar>

                <p class="mb-0 ml-4 primary-text--text">
                  {{ job.place }}<br />
                  {{ job.address }}
                </p>
              </v-card-text>

              <v-card-actions>
                <v-spacer />
                <v-btn text class="primary--text">
                  {{ $t('home.cardMore') }}
                </v-btn>
                <v-spacer />
              </v-card-actions>
            </div>
          </v-card>

          <v-btn
            width="100%"
            color="#f5f5f5"
            class="primary-text--text"
          >
            {{ $t('home.more') }}
          </v-btn>
        </v-col>
      </v-row>

      <!-- cards -->
      <v-row class="mt-7">
        <v-col
          v-for="(card, i) in cards"
          :key="i"
          cols="12"
          md="4"
        >
          <v-card class="pt-5 primary-text--text" height="100%">
            <v-img :src="getImgUrl(card.img, 'png')" aspect-ratio="1" height="188" contain />
            <v-card-title><h4>{{ card.name }}</h4></v-card-title>
            <v-card-text>{{ card.description }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- footer -->
    <v-footer dark class="p-home--footer" color="#37474F">
      <!-- top -->
      <div class="p-home--footer-top pb-5">
        <v-container>
          <v-row color="#37474F">
            <v-col
              v-for="(column, i) in footerColumns"
              :key="i"
              md="4"
              cols="12"
            >
              <span class="d-block body-2 font-weight-bold mb-7">{{ column.title }}</span>

              <a v-if="column.icon"><img :src="getImgUrl(column.icon, 'svg')" alt="Logo" /></a>

              <template v-if="column.menu">
                <div class="p-home--footer-list body-2">
                  <span
                    v-for="(item, j) in column.menu"
                    :key="j"
                    class="mb-2"
                  >
                    {{ item }}
                  </span>
                </div>
              </template>
            </v-col>
          </v-row>
        </v-container>
      </div>

      <!-- bottom -->
      <div class="pa-5 body-2">
        <span>Made with</span>
        <v-icon size="14">mdi-heart</v-icon>
        <span>&</span>
        <v-icon size="14">mdi-coffee</v-icon>
      </div>
    </v-footer>
  </div>
</template>

<script>
export default {
  layout: 'single-page',

  data() {
    return {
      form: {
        firstName: null,
        lastName: null,
        email: null
      }
    };
  },

  computed: {
    carousel() {
      return this.$t('home.slider1').map((item, i) => {
        item.img = `slider1-img-${i + 1}`;
        if (i !== 1) {
          item.companyImg = `slider1-company-img-${i + 1}`;
        }
        return item;
      });
    },

    /* access to registration form lang file */
    rf() {
      return this.$t('home.registrationForm');
    },

    jobs() {
      return this.$t('home.jobs').map((item, i) => {
        const count = i + 1;
        item.bg = `jobs-bg-${count}`;
        item.brandImg = `jobs-brand-${count}`;
        return item;
      });
    },

    cards() {
      return this.$t('home.cards').map((item, i) => {
        item.img = `card-img-${i + 1}`;
        return item;
      });
    },

    footerColumns() {
      return this.$t('home.footer.cols').map((item, i) => {
        if (i === 0) {
          item.icon = 'logo-solo-white';
        }

        return item;
      });
    }
  },

  methods: {
    getImgUrl(name, ext) {
      const img = require.context('../../assets/images', false, /\.(jpg|jpeg|png|svg)$/);
      return img(`./${name}.${ext}`);
    }
  }
};
</script>

<style scoped lang="scss">
@import "assets/styles/custom/variables.scss";

.p-home {
  position: relative;
  min-height: calc(100vh - 64px);

  &--background {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background: url('../../assets/images/background.jpg') no-repeat top left;
    background-size: cover;
  }

  &--content {
    position: relative;
    z-index: 1;
  }

  &--slide {
    padding: 72px 33px 40px;
    border-radius: $global-border-radius;
    background: $card-background;
  }

  &--slide-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  &--slide-img {
    margin-bottom: 20px;

    &.multiple {
      width: 120px;
      height: 120px;
      position: relative;

      .p-home--slide-avatar {
        position: absolute;

        &:first-of-type {
          z-index: 1;
          bottom: 10px;
          left: 0;
        }

        &:last-of-type {
          right: 0;
          top: 0;
          background-color: #fff;
        }
      }
    }
  }

  &--slide-title {
    margin-bottom: 15px;
  }

  &--form {
    display: flex;
    flex-direction: column;
    padding: 15px 30px 0;
    text-align: center;
    border-radius: $global-border-radius;
    background-color: $card-background;

    & > * {
      margin-bottom: 20px;
    }
  }

  &--form-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 -30px;
    padding: 15px;
    border-radius: 0 0 $global-border-radius $global-border-radius;
    background-color: #F5F5F5;
  }

  &--form-field {
    margin-bottom: 0;
  }

  &--jobs {
    margin-top: 200px;
  }

  &--long-card {
    border-radius: $global-border-radius;
  }

  &--footer {
    padding: 0;
  }

  &--footer-top {
    width: 100%;
    background-color: #455A64;
  }

  &--footer-bottom {
    padding: 15px;
  }

  &--footer-list {
    display: flex;
    flex-direction: column;
    text-transform: capitalize;
  }

  @media all and (max-width: 540px) {
    &--jobs {
      margin-top: 40px;
    }

    &--background {
      background: url('../../assets/images/background-sm.jpg') no-repeat top right;
      background-size: cover;
    }
  }
}
</style>
