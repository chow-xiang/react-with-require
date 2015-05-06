define(["require"],function () {
		requirejs.config({
			"paths" : {
				/*lib*/
				"react" : "/lib/react",
				"jquery" : "/lib/jquery-2.0.0",
				"marked" : "https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.2/marked.min",

				/*build*/
				"comment" : "/build/comment",
				"main" : "/build/main"
			}
		});

		requirejs(["main"]);
	}
);