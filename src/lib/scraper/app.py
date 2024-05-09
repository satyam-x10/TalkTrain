import json
import requests
from bs4 import BeautifulSoup

# URL of the webpage to scrape
url = 'https://www.prokerala.com/travel/indian-railway/trains'

# Send a GET request to the URL
response = requests.get(url)

# Parse the HTML content
soup = BeautifulSoup(response.text, 'html.parser')

# Find all tables on the webpage
train_tables = soup.find_all('table')

# Initialize a list to store train information
trains = []

# Loop through each table
for train_table in train_tables:
    # Loop through each row in the table (excluding the header row)
    for row in train_table.find_all('tr')[1:]:
        # Extract data from each column
        columns = row.find_all('td')
        # Extract train name, number, boarding, and destination stations
        train_number = columns[1].text.strip()
        train_name = columns[2].text.strip()
        boarding_station = columns[3].text.strip()
        destination_station = columns[4].text.strip()
        # Create a dictionary to represent the train information
        train_info = {
            "serial_no": len(trains) + 1,
            "train_name": train_name,
            "train_number": train_number,
            "boarding_station": boarding_station,
            "destination_station": destination_station
        }
        # Append the train information dictionary to the list
        trains.append(train_info)

# Save the scraped data as a JSON file
with open('src/lib/scraper/train_data.json', 'w') as json_file:
    json.dump(trains, json_file, indent=4)

print("Data saved to 'train_data.json' file.")
