var data =[ {'principal':2500,'time':1.8},
    {'principal':1000,'time':5}, {'principal':3000,
    'time':1}, {'principal':2500,'time':3} ];

/**the function below takes an array as a single argument
and returns an array of objects called 'interestData'
we loop through the array items to calculate for each 
indiividual objects**/


function interestCalculator(data){
    var interestData= [];
    var rate = 0
    for(var items=0;items<data.length;items++){
    if(data[items].principal>=2500 && data[items].time>1 && data[items].time<3){
    rate =3;
    var interest= (data[items].principal*data[items].time*rate)/100;
    data[items].rate=rate;
    data[items].interest=interest;
    interestData.push(data[items]);


    }
    else if (data[items].principal>=2500 && data[items].time>=3){
    rate =4;
    var interest= (data[items].principal*data[items].time*rate)/100;
    data[items].rate=rate;
    data[items].interest=interest;
    interestData.push(data[items]);


    }
    else if (data[items].principal<2500 || data[items].time<=1){
    rate =2;
    var interest= (data[items].principal*data[items].time*rate)/100;
    data[items].rate=rate;
    data[items].interest=interest;
    interestData.push(data[items]);
    }  
    else {rate=1
    var interest= (data[items].principal*data[items].time*rate)/100;
    data[items].rate=rate;
    data[items].interest=interest;
    interestData.push(data[items]);
    }

    }console.log('interestdata =')
    console.log( interestData);
    return interestData;
};


//we call on the function here with the data array argument
interestCalculator(data)   
