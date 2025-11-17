const readline = require("readline");
const rl = readline.createInterface (
{
    input: process.stdin,
    output: process.stdout
}
)

rl.question("Bạn học JS bao lâu rồi? ", function(days) {
    console.log(`Tôi học JS được ${days} ngày`);
    rl.close();
});
