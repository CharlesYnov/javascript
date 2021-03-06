var rulesState = {

    create: function ()
    {
        // On ajoute les images pour le menu
        game.stage.backgroundColor = "#FFFFFF";

        if (score < 0 || score >= 0)
        {
            game.add.sprite(0, 0, 'bgGameOver');
        }
        else
        {
            game.add.sprite(0, 0, 'bgMenu');
        }


        //On insère du texte
        game.add.text(20, 20, 'Saut  : Fleche  du  haut / Espace', {font: '25px njnaruto', fill:'#FFFFFF'});
        game.add.text(20, 70, 'Glisse  :  Fleche  du  bas', {font: '25px njnaruto', fill:'#FFFFFF'});
        game.add.text(20, 120, 'Attaque  :  Fleche  de  droite', {font: '25px njnaruto', fill:'#FFFFFF'});
        game.add.text(590, 470, 'Espace  pour  revenir', {font: '25px njnaruto', fill:'#FFFFFF'});

        // On lui demande d'appuyer sur une touche (Entrer)1
        var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.addOnce(this.start, this);
    },

    start: function ()
    {
        if (score < 0 || score >= 0)
        {
            game.state.start('GameOver');
        }
        else
        {
            game.state.start('Menu');
        }
    }

};
