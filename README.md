<div align="center">

<h2> Dive into the World of Olympics with Olympic Yatra </h2>

Explore Olympic data like never before. Analyze trends, visualize statistics, and discover insights with an interactive dashboard based on the MERN stack integrated with Python and Apache Spark.

</div>

## 🗺️ Map
- [📦 Installation](#-installation)
- [🚀 Features](#-features)
- [🗂️ Data Processing](#%EF%B8%8F-data-processing)
- [📝 License](#-license)
- [📢 Acknowledgments](#-acknowledgments)

## 🚀 Features

- **Interactive Data Visualizations**: Explore various charts, graphs, and maps visualizing Olympic trends.
- **MongoDB Integration**: Efficient data storage for faster querying.
- **Apache Spark Processing**: Handle and analyze large datasets with Apache Spark.
- **Python Backend**: Utilize Python for complex data processing and seamless integration.

## 📦 Installation

### Prerequisites
- **Node.js** (version 14 or later)
- **Python** (version 3 or later)
- **Apache Spark** (configured and running)
- **MongoDB** (local or cloud instance)
- A modern web browser (Chrome, Firefox, etc.)

### Steps to Set Up

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Aditi-Yawale/olympic_yatra.git
   cd olympic_yatra
   ```

2. **Install Frontend Dependencies**
   ```bash
   npm install
   ```

3. **Install Python Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up MongoDB**: 
   - For **local MongoDB**, ensure it is running: `mongod`.
   - For **MongoDB Atlas**, update the connection string in `.env`.

5. **Run Apache Spark**: 
   - Ensure Spark is installed and running: `spark-shell` or `pyspark`.

6. **Start Backend Server**
   ```bash
   python app.py
   ```

7. **Start Frontend Development Server**
   ```bash
   npm run dev
   ```

## 🗂️ Data Processing

### Using Apache Spark for Olympic Data Analysis
- **Load Data**:
   The data is loaded and processed using Apache Spark to handle large volumes efficiently.
   ```python
   spark.read.csv("data/olympic_data.csv", header=True)
   ```

- **Data Cleaning**:
   Pre-process the data for better visualization and analysis.
   ```python
   df = df.na.drop()  # Removing null values
   ```

- **Aggregation**:
   Perform aggregations like counting medals per country using Spark.
   ```python
   df.groupBy("Country").agg({"Medals": "sum"}).show()
   ```

## 📝 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📢 Acknowledgments
- **Data Source**: The Olympic dataset is derived from the official [Olympic Data Feed](https://figshare.com/articles/dataset/Olympic_history_longitudinal_data_scraped_from_www_sports-reference_com/6121274?file=11693840).
