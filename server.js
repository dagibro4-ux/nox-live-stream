
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
