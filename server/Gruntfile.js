grunt.loadNpmTasks('grunt-apidoc');

grunt.initConfig({
    apidoc: {
        myapp: {
          src: "./routers/",
          dest: "./public/docs/"
        }
      }
})
