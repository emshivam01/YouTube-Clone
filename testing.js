curl \
  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=AIzaSyAvghro-esT-NJ-LkJ-UTUCQZ0pcea3bYM' \
  --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
  --header 'Accept: application/json' \
  --compressed

  'https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCzee67JnEcuvjErRyWP3GpQ&key=AIzaSyAvghro-esT-NJ-LkJ-UTUCQZ0pcea3bYM'
