import requests
import pandas as pd
import numpy as np


def getWeather(district):
    response = requests.get(
        "http://api.weatherapi.com/v1/forecast.json?key=53b3639f89eb4c5e96c172844250302&q="+district+"&days=10",).json()
    res = pd.DataFrame.from_records(response)
    forecast = res['forecastday':'name']
    f = pd.DataFrame.from_records(forecast['forecast']['forecastday'])
    weather = pd.DataFrame.from_records(f["day"])
    weather_input = [weather.avgtemp_c[0],
                     weather.avghumidity[0], 100*weather.totalprecip_mm[0]+100]
    return weather_input


def getWeather1(district):
    # Using free API from weatherstack.com
    try:
        response = requests.get(
            f"http://api.weatherstack.com/current?access_key=ddebc00aceac5b2a60a787a4fe6480fb&query={district}"
        ).json()
        
        # Check if response contains error
        if 'error' in response:
            raise Exception(f"API Error: {response['error']['info']}")
            
        # Extract relevant weather data from current conditions
        current = response['current']
        temperature = float(current['temperature'])  # Convert to native Python float
        humidity = float(current['humidity'])
        rainfall = float(current.get('precip', 0)) * 100 + 100  # Convert to mm and add baseline
        
        weather_input = [temperature, humidity, rainfall]
        return weather_input
        
    except Exception as e:
        print(f"Error getting weather data: {str(e)}")
        # Return default values if API call fails
        return [25.0, 50.0, 100.0]  # Default temp, humidity, rainfall as floats