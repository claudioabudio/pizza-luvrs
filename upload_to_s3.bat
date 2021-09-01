aws s3 cp ./assets/js s3://pizza-luvrs-claudio-abud/js --recursive --exclude ".DS_Store"
aws s3 cp ./assets/css s3://pizza-luvrs-claudio-abud/css --recursive --exclude ".DS_Store"
aws s3 cp ./assets/pizzas s3://pizza-luvrs-claudio-abud/pizzas --recursive --exclude ".DS_Store"
aws s3 cp ./assets/toppings s3://pizza-luvrs-claudio-abud/toppings --recursive --exclude ".DS_Store"