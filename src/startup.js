'use strict';

import 'bootstrap/css/bootstrap.css!';

System.import('dropdown/dropdown')
    .then(
        dropdown => console.log(dropdown.dropdown.value())
    );
