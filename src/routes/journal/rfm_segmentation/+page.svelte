<script>
  import Highlight from "svelte-highlight";
  import python from "svelte-highlight/languages/python";
  import material from "svelte-highlight/styles/material";

  const code1 = `
    # Import libraries
    from datetime import timedelta
    import pandas as pd
  `;

  const code2 = `
    # Read data using pandas
    data = pd.read_csv('../data.csv')
    # Convert date format
    data['InvoiceDate'] = pd.to_datetime(data['InvoiceDate'])
  `;

  const code3 = `
    # Create TotalSum column for dataset
    data['TotalSum'] = data['Quantity'] * data['UnitPrice']
    
    # Create snapshot date
    snapshot_date = data['InvoiceDate'].max() + timedelta(days=1)

    # Grouping by CustomerID
    data_agg = (
      data
      .groupby(['CustomerID'])
      .agg(
        {
          'InvoiceDate': lambda x: (snapshot_date - x.max()).days,
          'InvoiceNo': 'count',
          'TotalSum': 'sum'
        }
      )
    )
    
    # Clean up column names
    data_process.rename(
      columns = {
        'InvoiceDate': 'Recency',
        'InvoiceNo': 'Frequency',
        'TotalSum': 'MonetaryValue'
      }, inplace=True
    )
  `;
  const code4 = `
              Recency  Frequency  MonetaryValue
  CustomerID                                   
  12346.0         326          2           0.00
  12347.0           2        182        4310.00
  12348.0          75         31        1797.24
  12349.0          19         73        1757.55
  12350.0         310         17         334.40
  4,372 rows; 3 columns
  `
</script>

<svelte:head>
  {@html material}
</svelte:head>

<article>
  <header>
    <div class="flex items-center justify-between mb-1">
      <h1 class="h1 font-aspekta mb-4">
        Recency, Frequency, Monetary Model with Python
      </h1>
    </div>
  </header>

  <!-- Post Content -->
  <div class="text-slate-500 dark:text-slate-400 space-y-8">
    <p>
      The last time we analyzed our online shopper date set using the cohort
      analysis method. We discovered some interesting observations around our
      cohort data set. While cohort analysis provides us with customer behavior
      overtime and understand retention rates, we also want to be able to
      segment our data by their behavior as well.
    </p>
    <p>
      In this article, we will be exploring the popular RFM model used by
      retailers blending in-store and online purchases to segment their
      customers for better personalized ad content.
    </p>

    <!-- New Paragraph -->
    <div class="space-y-4">
      <h3 class="h3 font-aspekta mb-4">What is RFM?</h3>
      <strong class="font-medium text-slate-800 dark:text-slate-100">
        Behavioral segmentation by 3 important features:
      </strong>
      <ol>
        <li>1. Recency - numbeer of days since the last purchase</li>
        <li>2. Frequency number of transactions madee over a given period</li>
        <li>3. Monetary - amount spent over a given period of time</li>
      </ol>
    </div>
    <!-- Code Block -->
    <Highlight language={python} code={code1} />
    <Highlight language={python} code={code2} />
    <Highlight language={python} code={code3} />
    <Highlight language={python} code={code4} />
  </div>
</article>
