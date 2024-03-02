import pandas as pd

# Specify the path to your CSV file
csv_file_path = 'E:/downloads/archive/file.csv'

# Read the CSV file into a DataFrame
df = pd.read_csv(csv_file_path)

# Specify the columns to select
selected_columns = ['Startup Name', 'Business Description', 'Industry', 'Company Website', 'Pitchers City', 'Started in', 'Original Ask Amount', 'Original Offered Equity', 'Valuation Requested', 'Gross Margin', 'Yearly Revenue', 'Has Patents']

# Select the desired columns
selected_data = df[selected_columns]

# Rename columns
selected_data = selected_data.rename(columns={'Startup Name': 'name', 'Industry': 'type', 'Original Ask Amount': 'deal_amount', 'Original Offered Equity': 'deal_equity', 'Valuation Requested': 'valuation', 'Gross Margin': 'profit', 'Yearly Revenue': 'revenue', 'Business Description': 'idea', 'Company Website': 'website', 'Started in': 'founded_on', 'Pitchers City': 'head_office_address', 'Has Patents': 'patents'})

# Print column names to check for correctness
print("Columns in DataFrame:", selected_data.columns)

# Drop rows if 'Startup Name' or 'Industry' is empty
important_columns = ['name', 'type', 'deal_amount', 'deal_equity', 'valuation', 'profit', 'revenue']
selected_data = selected_data.dropna(subset=important_columns)

# Convert DataFrame to JSON
json_data = selected_data.to_json(orient='records', lines=True)

# Specify the path to the JSON file
json_file_path = 'E:/downloads/archive/output.json'

# Write JSON data to the file
with open(json_file_path, 'w') as json_file:
    json_file.write(json_data)

# Display the selected data
print(selected_data)
