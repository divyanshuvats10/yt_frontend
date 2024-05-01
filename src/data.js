export const API_KEY = "AIzaSyB6hGz0kYHTmaKeO1K6eNWd97o5J1Bi8ZI";     

export const value_converter = (value) => {
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"K";
    }
    else
    {
        return value;
    }
}