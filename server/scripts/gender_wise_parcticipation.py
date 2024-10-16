import json
from pyspark.sql import SparkSession

# Initialize a Spark session
spark = SparkSession.builder \
    .appName("Gender Wise Participation") \
    .getOrCreate()

# Read the CSV file
df = spark.read.csv("./scripts/athlete_events.csv", header=True, inferSchema=True)

# Perform the complex query to find gender-wise participation               
result_df = df.filter(df['Year'] >= 2012)\
    .groupBy('Sex')\
    .count()\
    .orderBy('count', ascending=False)

# Collect the result and prepare it for JSON serialization
result = result_df.collect()

# Prepare the gender participation list
gender_participation = [{"Sex": row['Sex'], "count": row['count']} for row in result]

# Print the result as JSON (this is captured by the Node.js server)
print(json.dumps(gender_participation))

# Stop the Spark session
spark.stop()
