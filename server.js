const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (HTML, CSS)
app.use(express.static('public'));

// Define referral routes
app.get('/binance', (req, res) => {
    const binanceReferralLink = 'https://www.binance.com/en/register?ref=YOUR_REFERRAL_CODE';
    res.redirect(binanceReferralLink);
});

app.get('/bybit', (req, res) => {
    const bybitReferralLink = 'https://www.bybit.com/en-US/register?affiliate_id=YOUR_AFFILIATE_ID';
    res.redirect(bybitReferralLink);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
