/*function LCD(arr1)
{
	var LCD_arr;
	for (var i = 2; i < arr1.Length; i++ )
		while (arr1)

return 
} */

function primeFactors(num, factors)
{
	var primes = [2,3,5,7,11,13,17,19,23,29,31,37];
	
	var MaxFactor = Math.sqrt(num);
	divides = num;
	remains = num;
	for (var j = 0; j <= primes.length; j++)
	{
		remains = divides % primes[j];
		
		console.log("j = " + j +
			" remains: "+ remains + ", divides: "+ divides);
		if (remains == 0) 
		{
			factors.push(primes[j]);
			divides /=  primes[j]; 
			if (divides == 1)
			{
				break;
			}
			else 
			{
				primeFactors(divides, factors);
			}

		}
		
	}
	console.log("factors length is : " + factors.length);
	return factors;
}

var facts = [];
var ar = [4, 10, 8, 15, 17, 33];
var len = ar.length;
console.log("ar length is :" + ar.length);
for (var k= 0; k < ar.length; k++)
{
	var facts = [];
	facts = primeFactors(ar[k], facts);
	console.log("facts length is : "+ facts.length);
	console.log("prime factors of : "+ ar[k] + " are");

	for (var l = 0; l < facts.length; l++)
	{
		console.log("     " + facts[l]);
	}

}
