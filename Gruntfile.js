
module.exports = function(grunt) {
	var cfg = {
		
		phplint: {
			good: ["*ShortOpenTag_good.php"],
			
			bad: ["*ShortOpenTag_bad.php"],

			
		}
	};

	grunt.initConfig(cfg);


	grunt.loadNpmTasks('grunt-phplint');

	grunt.registerTask("default", ["phplint:good", "phplint:good_nocache"]);
};
