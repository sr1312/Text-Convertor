Following are the steps to make any new tool inside category textapps. Assuming you want to create 'case converter', follow these step


Step 1: Open file 'textapps/urls.py'
Step 2: Add path to 'textapps/urls.py' 
		
			path('case-converter', views.case_converter, name = 'case_converter'),

		or you can uncomment the already added line.


Step 3: Now we have to add the corresponding view ('case_converter') to the path ('case-converter') in the views.py, so open 'textapps/views.py'.
Step 4: Create a method 'case_converter', which should take 'request' as an arguement, and 
		
		return render(request, 'textapps/case_converter.html',{})

		'case_converter.html' is the template we have to create inside 'templates/textapps/case_converter.html'

Step 5: Create a new file named 'case_converter.html' inside textapps, and copy paste everything from 'word-converter.html'.

Step 6: Delete everything inside this comment,
		<!-- tool area, you have to write code inside this div only-->	

		and create a UI for case converter


Step 7: To start a server, 
			a. open terminal from dock
			b. write, cd git_projects/toolgeckoenv/toolgecko
			c. source ../bin/activate
			d. python manage.py runserver
		website will be live at 127.0.0.1:8000/case-converter

