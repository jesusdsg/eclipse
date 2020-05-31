<template>
  <Layout>
    <div class="row" id="gallery-filter">
      <div class="col-12 text-center">
          <button id="toggle-filter" v-on:click="toggle = !toggle"><fa-icon icon="th-large" size="2x" aria-label="Toggle" /></button>
      </div>

      <div class="col-12">
        <transition name="fade">
          <div class="container text-center filter-container" v-show="!toggle">
            <button class="btn-filter" v-on:click="filter('all')"> All</button>
            <button class="btn-filter" v-on:click="filter('street')"> Street</button>
            <button class="btn-filter" v-on:click="filter('landscape')"> Landscape</button>
            <button class="btn-filter" v-on:click="filter('monochrome')"> Monochrome</button>
          </div>
        </transition>
      </div>
    </div>
    
    <transition-group class="transition-gallery" name="transition-gallery" tag="section">
        <div v-for="item in filteredItems" v-bind:key="item.id" class="gallery-item">
            <div class="gallery">
              <img class="gallery-img" :src="item.image" alt="gallery"/>
            </div>
      </div>
    </transition-group>
 

  </Layout>
</template>

<script>
var listItems = [
      { id: 1, tags: ['all', 'street'], image: require('../assets/images/gallery/g1.jpg') },
      { id: 2, tags: ['all', 'landscape'], image: require('../assets/images/gallery/g2.jpg') },
      { id: 3, tags: ['all', 'landscape'], image: require('../assets/images/gallery/g3.jpg') },
      { id: 4, tags: ['all', 'monochrome'], image: require('../assets/images/gallery/g4.jpg') },
      { id: 5, tags: ['all', 'landscape'], image: require('../assets/images/gallery/g5.jpg') },
      { id: 6, tags: ['all', 'street'], image: require('../assets/images/gallery/g6.jpg') },
      { id: 7, tags: ['all', 'monochrome'], image: require('../assets/images/gallery/g7.jpg') },
      { id: 8, tags: ['all', 'monochrome'], image: require('../assets/images/gallery/g8.jpg') },
      { id: 9, tags: ['all', 'landscape'], image: require('../assets/images/gallery/g9.jpg') },
      { id: 10, tags: ['all', 'monochrome'], image: require('../assets/images/gallery/g10.jpg') },
      { id: 11, tags: ['all', 'monochrome'], image: require('../assets/images/gallery/g11.jpg') },
      { id: 12, tags: ['all', 'landscape'], image: require('../assets/images/gallery/g12.jpg') }
    ];

export default {
  name: 'galleryFilter',
  data () {
    return {
      toggle: true,
      currentTag: 'all',
      items: listItems,
    }
  },
  methods: {
    filter: function(tag) {
      this.currentTag = tag;
    }
  },
  computed: {
    filteredItems: function() {
      var filter = this.currentTag;
      return this.items.filter(function(item) {
          return item.tags.indexOf(filter) !== -1;
      });
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.8s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

#toggle-filter {
  margin-bottom: 2em;
  transition: all 0.5s cubic-bezier(.25,.8,.25,1);
}

.gallery {
  transition: all 0.5s cubic-bezier(.25,.8,.25,1);
  padding: 15px;
}

.gallery:after {
  content: "";
  position: absolute;
  clear: both;
  transition: all 0.5s cubic-bezier(.25,.8,.25,1);
}

.gallery-img {
  width: 100%;
  height: auto;
  transition: transform 1s;
}

.gallery a {
  color: #7f7e7e !important;
}

.gallery-img:hover {
  -webkit-transform:scale(1.1);
    transform:scale(1.1);
}

.transition-gallery {
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
}

.gallery-item {
  transition: all 0.5s cubic-bezier(.25,.8,.25,1);
  flex: 1 1 33.3%;
}

@media(max-width: 467px) {
    .transition-gallery {
      display: block !important;
    }
}

</style>
