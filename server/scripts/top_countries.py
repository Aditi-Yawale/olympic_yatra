import json
from pyspark.sql import SparkSession

# Initialize a Spark session
spark = SparkSession.builder \
    .appName("Olympics Top Countries") \
    .getOrCreate()

# Read the CSV file
df = spark.read.csv("./scripts/athlete_events.csv", header=True, inferSchema=True)

# Perform the complex query to find top countries based on the number of athletes since 2012
result_df = df.filter(df['Year'] >= 2012) \
               .groupBy('NOC') \
               .count() \
               .orderBy('count', ascending=False) \
               .limit(15)

# Collect the result and prepare it for JSON serialization
result = result_df.collect()
top_countries = [{"NOC": row['NOC'], "count": row['count']} for row in result]

# Print the result as JSON (this is captured by the Node.js server)
print(json.dumps(top_countries))  # Add this line to output the result

# Stop the Spark session
spark.stop()
