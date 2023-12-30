//your JS code here. If required.
function confirmAndAlert()
	{
		let result = confirm("Do you want to proceed?");

		if(result)
		{
			alert("You clicked OK. Proceeding...");
		}else
		{
			alert("You clicked Cancel. Exiting...");
		}
	}