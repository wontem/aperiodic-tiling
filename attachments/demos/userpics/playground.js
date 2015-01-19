window.addEventListener('load', function () {
	var canvas = document.createElement('canvas');
	var controller = {
		seed: 12,
		colorsNumber: 3,
		width: 400,
		cols: 10,
		hueStep: 120,
		easing: 'linear',
		update: function () {
			createUserpic(canvas, this.seed, this.colorsNumber, this.width, null, this.cols, null, this.hueStep, this.easing);
		}
	};

	var gui = new dat.GUI({ autoPlace: false });

	gui.add(controller, 'seed').step(1);
	gui.add(controller, 'colorsNumber').step(1).min(2);
	gui.add(controller, 'width').step(20).min(100);
	gui.add(controller, 'cols').step(1).min(2);
	gui.add(controller, 'hueStep').step(1);
	gui.add(controller, 'easing', ['linear', 'easeOutQuart', 'easeInQuart']);
	gui.add(controller, 'update');

	controller.update();

	var customContainer = document.querySelector('.userpic-playground');
	customContainer.appendChild(gui.domElement);
	customContainer.appendChild(canvas);
});