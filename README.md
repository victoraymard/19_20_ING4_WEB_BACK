# Frontend


<p>Notre partie Frontend contient deux pages sous les routes /home et /form.
Sur la première s'affiche différentes informations issues de la base de données mongoDB.</p>
<ul>
    <li>
        <ul>
                <li><p>Sur cette page, on retrouve une carte utilisateur sur la gauche sur laquelle on peut en chercher un par 
                son identifiant. Des informations relatives à son profil son ensuite affichées.</p> </li>
                <li><p>En dessous de la carte utilisateur, on trouve les capteurs qu'il possède.</p></li>
            </ul>
    </li>
    <li>
        <ul>
                <li> <p>A droite de la carte utilisateur, vous pourrez trouver un graphique bar-chart montrant le nombre de 
                mesure en fonction de leur type.</p></li>
                <li><p>Sur la même ligne, on trouve aussi un pie-chart qui affiche la proportion de capteurs par 
                pièce.</p> </li>
                <li><p>En dessous, vous pourrez trouver un graphique dévoilant le nombre de capteurs et de mesures en fonction 
                des années.</p></li>
                <li><p>Enfin, sur la dernière ligne, vous trouverez les dernières mesures enregistrées par chaque type de capteurs.</p>
                </li>
            </ul>
    </li>
</ul>
Tous les composants ont été crées séparéments, puis rassemblés dans App.js. Le lien avec le backend se fait via les fichiers
du dossier API


# Backend

Pour ce qui est du backend, nous avons implémemté les méthodes Create Read Update et Delete relatives aux différentes 
collections user, sensor et measure. Des routes, et schémas ont également été créées, aisni que des controleurs.

Deux branches back on été développées de manière séparées : l'une intéragissant avec le front et la base de données mongoDB
en local. Et l'autre, sur la branche developp qui assure une connection avec la base de données en ligne mongoDB atlas, 
ainsi qu'un lien avec le front, mais que nous n'avons pas eu le temps de développer.

### lien vers le repo back : https://github.com/victoraymard/19_20_ING4_WEB_BACK

# Documentation
## Autres ressources
<ul>
    <li>airtable : https://airtable.com/tbl7mHp7jvq2ncoay/viwT6W9CfzGBBf0zg?blocks=hide&fbclid=IwAR2x20cWpZCV_o339zJuFMyB0eiXh_NyiF77y1MbjS2W1yP8dtyqCXGuemw#</li>
    <li>zooning : https://drive.google.com/open?id=14TYppWkDvmeRdtcWvjdrsD_PJUtk5Zd-</li>
    <li>wireframing : https://drive.google.com/open?id=1YK3kgq7GeaJdsQj04EBusBdHPNAA--1l </li>
    <li>mockup : https://www.figma.com/file/HayY4p42j0jJJZqE3T5W9P/SaaS-Sunset-Dashboard-Theme-for-Figma-(Copy)?node-id=0%3A1</li>
    <li>nos vidéos loom : https://drive.google.com/open?id=1r2-fPGZUI41HbOgVu87CHfR9GPimKA0J46iXMfGqV4U</li>
</ul>

## Mise en ligne
<p>
Nous avons essayé de mettre en production notre projet et mettant en ligne les différentes partie que sont le front et 
le back via Heroku ainsi que la bdd via mongoDB atlas.
</p>
<ul>
        <li>le front : https://ing4-project-web-front-prod.herokuapp.com/home</li>
        <li>le back : https://projet-web-ing4-back.herokuapp.com/</li>
        <li>lien de requête mongoDB atlas : mongodb+srv://UserBDD:UserBDD@cluster0-ld81e.mongodb.net/project_BDD?retryWrites=true&w=majority</li>
</ul>

Malheureusement, nous n'avons pas eu le temps de connecter ces trois services ensemble.