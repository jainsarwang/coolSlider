# coolSlider
This is just a Slider that you can be used in your website. This is made using vanilla Javascript, and CSS. So, no need to import any other file from external source just Import CSS and Javascript. And Start using it. You can also create HTML Slides.

## Key Features
- Pre-build script
- No need to import external library 
- Can be Automated
- Can be slide using Arrow key
- Less Bulky in size
- Can Add an HTML Element too

## Description
```
new CoolSlider({
    slider                      :       'HTML Object',
    maxWidth                    :       'Maximum widthof slider',
    controls                    :       'allow to show control button',
    isKeyControlled             :       'navigate you keyboard arrow key or not',
    autoSlide                   :       'time in which slide auto slides',
    aspectRatio                 :       'aspect ratio of slider and its element',
    paginationActiveColorCode   :       'Color of Pagination indicator corresponds to slides',
    paginationColorCode         :       'ackground color of pagination indicator',
    paginationType              :       'type of pagination you  want'
});
```

## Parameters
### slider `Required`
HTML Element in which you want to add `Slider` Property.
```
slider : HTML Element Object 
```
### maxWidth
Maximum width to your slider.
```
maxWidth : width | 100vw (default)
```

### controls
Wheather to show `Previous` or `Next` Button or Not.
```
controls : true (default) | false
```

### isKeyControlled
Wheather you want to navigate to slides with `Left Arrow` or `Right Arrow` key or not.
```
iskeyControlled : true (default) | false
```

### autoSlide
Automatically slides to next slide in `provided Time`
```
autoSlide : false (default) | time (in millisecond)
```

### aspectRatio
Set `Aspect-ratio` to all the item of your Slider.
```
aspectRatio : auto (default)
```

### paginationColorCode
Use to set `Background color` of all the pagination indicator.
```
#aaaaaa (default)
```

### paginationActiveColorCode
Use to set `Background color` of the pagination indicator corresponding to `active slide`.
```
#fe51ad (default)
```

### paginationType
`Type` of pagination indicator you want for your Slider
```
0 (default) 'For Disc' | 1 'For Circle' | 2 'For Horizontal Bar'
```

## Example
### Example 1
Adding Simple Slider
```
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="../src/css/coolSlider.css">
		<title>Cool Slider</title>
	</head>
	<body>
		<div id="wrapper">
			<div class="container">
				<!---- Slider HTML code Start---->
				<div class="coolSlider" id="coolSlider1">
					<img src="files/img1.png">
					<img src="files/img2.png">
					<img src="files/img3.png">
					<div style="
						width:100%;
						background: linear-gradient(#e74545,#ffffffd9);
						color: #4f504ffc;
						display: grid;
						place-content: center;
					">
						<h1>HTML Content Slide</h1>
					</div>
					<video autoplay muted loop>
						<source src="files/vid.mp4" type="video/mp4">
					</video>
				</div>
			</div>
			</div>
		
		<script type="text/javascript" src="../src/js/coolSlider.js"></script>
		<script type="text/javascript">
			new CoolSlider({
				slider:document.querySelector('#coolSlider1.coolSlider')
			});
		</script>
	</body>
</html>
```

### Result 1
[![Example1](https://user-images.githubusercontent.com/96441225/149611284-6c76f85c-6932-4f83-a179-f9d4daa2f7ec.png)](https://jainsarwang.github.io/coolSlider/examples/example1.html)


### Example 2
Use of `maxWidth` and `controls` property
```
<script type="text/javascript">
	new CoolSlider({
		slider:document.querySelector('#coolSlider2.coolSlider'),
		maxWidth:'80%',
		controls:false
	});
</script>
```

### Result 2
[![Example2](https://user-images.githubusercontent.com/96441225/149611426-2c0fd176-9438-4f53-9bdb-f04c14dbdb7c.png)](https://jainsarwang.github.io/coolSlider/examples/example2.html)


### Example 3
Fully Custom slider
```
<script type="text/javascript">
	new CoolSlider({
		slider:document.querySelector('#coolSlider3.coolSlider'),
		maxWidth:'80%',
		paginationType: 2,
		paginationColorCode: '#fff',
		paginationActiveColorCode: '#218aff'
	});
</script>
```

### Result 3
[![Example3](https://user-images.githubusercontent.com/96441225/149611660-81cefa46-b0df-4ea5-8785-77a7e987f703.png)](https://jainsarwang.github.io/coolSlider/examples/example3.html)
