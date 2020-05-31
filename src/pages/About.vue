<template>
  <Layout>
    <section>
      <div class="galery">
            <h2 class="title text-center">ABOUT ME</h2>
            <div class="row">
                <div class="col-lg-8 col-md-auto col-xs-auto">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="text-left">
                            <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan iusto odio dignissim qui blandit.</p>
                            <h5 class="title">Photography <i class="fa fa-camera-retro"></i></h5>
                            <p class="description">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit. 
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="text-left">
                            <h5 class="title">Video Edition <i class="fa fa-video-camera"></i></h5>
                            <p class="description">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
                            </p>
                        </div>

                      <br>
                    </div>


                </div>
                <div class="col-4">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="text-left">
                            <img src="../assets/images/about.jpg" class="about-image" alt="about me">
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About'
  }
}
</script>

<style lang="scss" scoped>



.about-image {
  display: block;
  margin: auto;
  width: 400px;
  max-width: 890px;
  padding-bottom: 50px;
  padding-top: -2em;

  @media (max-width: 460px) {
    width: 250px;
  }

}
</style>
