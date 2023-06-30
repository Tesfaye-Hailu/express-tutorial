const { Router } = require ('express');
const router = Router();
const supermarkets = [
{
    store: 'Cosco',
},
{
    store: 'Target',
},
{
    store: 'Albertsons',
},

];
router.get('', (req,res) => {
res.send(supermarkets);
});
module.exports = router;