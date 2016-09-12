(function(window, document) {
	window.JSON2XML = function(src) {
		if (typeof src == 'string') {
			src = JSON.parse(src);
		}

		var appendChildren = function(element, children) {
			if (typeof children == 'string') {
				element.innerText = children;
			} else {
				children.forEach(function(child) {
					element.appendChild(child);
				});
			}
		};

		var parseObject = function(object, root) {
			if (typeof object == 'string') {
				return object;
			} else {
				var elements = [];
				Object.keys(object).forEach(function(tag) {
					if (tag == '$$attributes') {
						Object.keys(object[tag]).forEach(function(attrName) {
							root.setAttribute(attrName, object[tag][attrName]);
						});
					} else if (tag == '$$contents') {
						root.innerText = object[tag];
					} else {
						var element = document.createElement(tag);
						var children = parseObject(object[tag], element);
						appendChildren(element, children);
						elements.push(element);
					}
				});
				return elements;
			}
		};

		var root = document.createElement(src.document.root);
		var object = src['$$contents'];
		var children = parseObject(object, root);
		appendChildren(root, children);
		return root;
	};
})(window, document);
