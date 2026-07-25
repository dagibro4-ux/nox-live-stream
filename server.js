const NodeMediaServer = require('node-media-server');

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    allow_origin: '*'
  }
};

var nms = new NodeMediaServer(config);
nms.run();
<script>
    // መጀመሪያ የሚታየው ቁጥር
    let viewers = 1000; 

    function updateLiveStats() {
        // በየ 3 ሰከንዱ ከ 1 እስከ 3 ሰው እንዲጨምር የሚያደርግ ኮድ
        let randomIncrease = Math.floor(Math.random() * 3) + 1;
        viewers = viewers + randomIncrease;
        
        // በገጹ ላይ ቁጥሩን ማዘመን
        document.getElementById("viewer-count").innerText = viewers;
    }

    // በየ 3 ሰከንዱ (3000 ሚሊ ሰከንድ) ተግባሩን እንዲደግም ማድረግ
    setInterval(updateLiveStats, 3000);
</script>
