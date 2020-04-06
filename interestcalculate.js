var data =[ {'principal':2500,'time':1.8},
    {'principal':1000,'time':5}, {'principal':3000,
    'time':1}, {'principal':2500,'time':3} ];

/**the function below takes an array as a single argument
and returns an array of objects called 'interestData' **/


function interestCalculator(data){
    var interestData= [];
    var rate = 0
    for(var err=0;err<data.length;err++){
    if(data[err].principal>=2500 && data[err].time>1 && data[err].time<3){
    rate =3;
    var interest= (data[err].principal*data[err].time*rate)/100;
    data[err].rate=rate;
    data[err].interest=interest;
    interestData.push(data[err]);


    }
    else if (data[err].principal>=2500 && data[err].time>=3){
    rate =4;
    var interest= (data[err].principal*data[err].time*rate)/100;
    data[err].rate=rate;
    data[err].interest=interest;
    interestData.push(data[err]);


    }
    else if (data[err].principal<2500 || data[err].time<=1){
    rate =2;
    var interest= (data[err].principal*data[err].time*rate)/100;
    data[err].rate=rate;
    data[err].interest=interest;
    interestData.push(data[err]);
    }  
    else {rate=1
    var interest= (data[err].principal*data[err].time*rate)/100;
    data[err].rate=rate;
    data[err].interest=interest;
    interestData.push(data[err]);
    }

    }console.log('interestdata =')
    console.log( interestData);
    return(interestData);
};


//we call on the function here with the data array argument
interestCalculator(data)   