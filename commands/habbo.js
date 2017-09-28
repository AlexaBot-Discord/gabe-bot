exports.run = (client, msg, args) => {
    const habbo = [
        "https://scontent.flis6-1.fna.fbcdn.net/v/t1.0-9/21765175_1465241263559140_7265295306469713839_n.jpg?oh=325cb81cb2b4926b80cf97e67b78a934&oe=5A484BFC",
        "https://scontent.flis6-1.fna.fbcdn.net/v/t1.0-9/21686469_1464836780266255_4744126702382239937_n.png?oh=6414fb1ece1a31cd858b93dc2e9bf9f6&oe=5A455349",
        "https://scontent.flis6-1.fna.fbcdn.net/v/t1.0-9/21686221_1464373233645943_940120102569568702_n.png?oh=5751abd3eb7114309477e160b0ca345f&oe=5A47E638",
        "https://scontent.flis6-1.fna.fbcdn.net/v/t1.0-9/21761551_1464266616989938_8678386611662076948_n.png?oh=e1c8c4cb21970fe895c3c00ba7e1e82b&oe=5A3B7714",
        "https://media.discordapp.net/attachments/359429651816382465/361978974823251968/IMG-20170922-WA0042.jpg",
        "https://media.discordapp.net/attachments/359429651816382465/361978303722160129/IMG-20170922-WA0041.jpg",
        "https://media.discordapp.net/attachments/359429651816382465/361977995172249600/IMG-20170922-WA0039.jpg",
        "https://scontent.flis6-1.fna.fbcdn.net/v/t1.0-9/21767989_1463483870401546_5135853454267019285_n.jpg?oh=bbcc5e9e1ca4f571181acfc0c7c8148b&oe=5A45AECA",
        "https://scontent.flis6-1.fna.fbcdn.net/v/t1.0-9/21686229_1463351950414738_1774794114922031142_n.png?oh=4f796a071e66d5f2b065115bbad2dcd7&oe=5A3C1F76",
        "https://scontent.flis6-1.fna.fbcdn.net/v/t1.0-9/21616157_1462559033827363_3583055967818289523_n.png?oh=56392be5f8e4f5f4d03d229c7ea102ab&oe=5A47D1C5",
        "https://scontent.flis6-1.fna.fbcdn.net/v/t1.0-9/21761484_1462441537172446_9137677262659679313_n.png?oh=127936cb6f134012efd9a017bebf9ace&oe=5A55DE7B",
        "https://scontent.flis6-1.fna.fbcdn.net/v/t1.0-9/21752052_1461498710600062_608658650805122463_n.png?oh=9b13926861907c1ea53693bf80060ce0&oe=5A85AC2F",
        "https://scontent.flis6-1.fna.fbcdn.net/v/t1.0-9/21740176_1458143537602246_1412052604297339094_n.png?oh=e7dcbaad9c6a94b06751533480bc628e&oe=5A5742FB",
        "https://scontent.flis6-1.fna.fbcdn.net/v/t1.0-9/21752051_1455534021196531_949700877244425239_n.png?oh=555ef4ce57b3699c3254a8ead428fe5c&oe=5A83B084",
        "https://scontent.flis6-1.fna.fbcdn.net/v/t1.0-9/21371031_1453179588098641_4811135495011194288_n.png?oh=eff909540c9eb19882e44154873350f4&oe=5A3D48C3",
        "https://scontent.flis6-1.fna.fbcdn.net/v/t1.0-9/21369530_1451523674930899_890039269793614250_n.png?oh=bf597e6594024673cbf2da8affd06b20&oe=5A4D3875",
        "https://scontent.flis6-1.fna.fbcdn.net/v/t1.0-9/21314479_1451114948305105_2561363502712484757_n.png?oh=56a827856300a7887f2b5fede8256768&oe=5A4AEDE2",
        "https://scontent.flis6-1.fna.fbcdn.net/v/t1.0-9/21314870_1450398625043404_7985723793630594965_n.png?oh=247cb9ecf280935de4d76d948b7ee6a8&oe=5A3ABD22",
        "https://scontent.flis6-1.fna.fbcdn.net/v/t1.0-9/21230856_1444569045626362_1770497614643546780_n.png?oh=47e2177386709ddc44799c0593430de6&oe=5A4769D3",
        "https://scontent.flis6-1.fna.fbcdn.net/v/t1.0-9/21151735_1443380925745174_6226100039203321698_n.png?oh=f2f53c22906288528aff25acd2d2fe5a&oe=5A57F4C0",
        "https://scontent.flis6-1.fna.fbcdn.net/v/t1.0-9/21150446_1443379915745275_4794514717115200984_n.png?oh=8186d4c9e91bd9463aa4492dcfe39299&oe=5A57656D",
        "https://scontent.flis6-1.fna.fbcdn.net/v/t1.0-9/21150421_1442654469151153_652313775077878794_n.png?oh=2cfcca51ce7032e60a2c42358fc3c19d&oe=5A83F01C",
        "https://scontent.flis6-1.fna.fbcdn.net/v/t1.0-9/21106815_1442653922484541_5699551612100838122_n.png?oh=2c891748c57a676d5f4b98fd66aaa358&oe=5A59162B",
        "https://scontent.flis6-1.fna.fbcdn.net/v/t1.0-9/21192618_1442007745882492_28289145846435559_n.jpg?oh=0140aa96f91da080ad2a5fcc636841d7&oe=5A474F01",
        "https://scontent.flis6-1.fna.fbcdn.net/v/t1.0-9/21192502_1441948375888429_6305904976595417293_n.png?oh=110925e505587873fde4042d47d0350d&oe=5A39CC3B",
        "https://scontent.flis6-1.fna.fbcdn.net/v/t1.0-9/21032647_1439265909490009_2043873644294439720_n.png?oh=6e21088274fd957136ee48f6f63552c1&oe=5A405A85",
        "https://scontent.flis6-1.fna.fbcdn.net/v/t1.0-9/21077671_1438651989551401_6481903783034931386_n.png?oh=16efe1b4f7e4ba90d1465748f93c3d42&oe=5A3F0FFA",
        "https://scontent.flis6-1.fna.fbcdn.net/v/t1.0-9/21032554_1437170846366182_5689809443393429188_n.png?oh=8cddba3ab4adf73d73744ec8ac4aba25&oe=5A82EC9A"
    ];
    const randomHabbo = Math.floor(Math.random()*habbo.length);
    msg.delete();
    msg.channel.send({embed:{
        color: 0x46be30,
        image: {
            url: habbo[randomHabbo]
        },
        footer: {
            icon_url: msg.author.avatarURL,
            text: `${msg.author.tag} | © Brazilian Habbo Memes / 2017`
        }
    }});
}