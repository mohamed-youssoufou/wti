<template>
  <div class="container">
    <div class="row">
      <h2 class="col-md-12 d-flex title">
        <div class="w-50 elt">Le lexique de la blockchain</div>
        <div class="w-50 elt">
          <input
            type="text"
            v-model="search_field"
            class="form-control"
            placeholder="Chercher un mot"
          />
        </div>
      </h2>
      <div class="col-md-12">
        <div id="accordion">
          <div
            class="card bg-transparent"
            v-for="lexique in lexiques_search_result"
            :key="lexique.id"
          >
            <div class="card-header" id="headingOne">
              <h5 class="mb-0">
                <button
                  class="btn btn-link panel"
                  style="color: white"
                  data-toggle="collapse"
                  :data-target="'#collapse' + lexique.id"
                  aria-expanded="true"
                  :aria-controls="'collapse' + lexique.id"
                >
                  {{ lexique.title }}
                </button>
              </h5>
            </div>

            <div
              :id="'collapse' + lexique.id"
              class="collapse"
              :aria-labelledby="'heading' + lexique.id"
              data-parent="#accordion"
            >
              <div class="card-body ml-4">
                {{ lexique.content }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lexiques: [
        {
          id: 1,
          title: "Adresse",
          content: `Une adresse de la blockchain est l'équivalent d'un "numéro de compte" et prend la forme d'une suite alphanumérique du type : 0xfb56d73bf4608b12ed9d4e77a38f485011178da8.`,
        },
        {
          id: 2,
          title: "Airdrop",
          content: `Opération de promotion consistant à distribuer gratuitement des crypto-monnaies durant une 
          période définie et parfois, sous certaines conditions. L'objectif est d'augmenter la visibilité du 
          projet et d'en augmenter la communauté.`,
        },
        {
          id: 3,
          title: "Altcoin",
          content: `Un altcoin désigne toutes les autres crypto-monnaies autres que le Bitcoin.`,
        },
        {
          id: 12,
          title: "ATH/ATL (All Time High/Low)",
          content: `Activité consistant à tirer profit de la différence de prix d'une crypto-monnaie entre plusieurs places de marché. Par exemple ; acheter 1 bitcoin à 5000 euros sur une place de marché X puis le transférer sur une place de marché Y où il sera possible de le vendre à 5200 euros.`,
        },
        {
          id: 4,
          title: "Attaque 51 %",
          content: `On parle d’attaque 51 % lorsque plus de la moitié de la puissance de calcul du réseau d’une crypto-monnaie est contrôlée par un mineur ou un groupe de mineurs. Ils peuvent alors :
            Emettre une transaction qui serait en conflit avec celle de quelqu’un d’autre.
            Empêcher une transaction de recevoir une confirmation.
            Effectuer une double dépense.
            Empêcher les autres mineurs de valider les blocs.
            Une attaque 51 % ne donne cependant pas le plein contrôle sur la chaîne de blocs (blockchain) : seuls les blocs les plus récents sont vulnérables. Plus les blocs sont anciens, plus ils sont sécurisés contre ce type d'attaque.
`,
        },
        {
          id: 5,
          title: "ASIC (Application Specific Integrated Circuit)",
          content: `Un ASIC est une puce informatique conçue pour une application précise. Il existe par exemple des ASIC conçues uniquement pour le minage du Bitcoin.`,
        },
        {
          id: 6,
          title: "Bandes de Bollinger",
          content: `Indicateur graphique révélant la volatilité du marché.`,
        },
        {
          id: 7,
          title: "BIP (Bitcoin Improvement Proposals)",
          content: `Document conceptuel technique et concis, en vue d'introduire des fonctionnalités au 
          réseau Bitcoin. Bitcoin n'ayant pas de structure formelle, ceci constitue une méthode standard 
          de communication des idées.`,
        },
        {
          id: 8,
          title: "BitPay",
          content: `BitPay est un système de paiement pour bitcoins permettant aux commerçants d’accepter les paiements en bitcoins.`,
        },
        {
          id: 9,
          title: "Blockchain",
          content: `Une blockchain (chaîne de blocs) est une base de donnée distribuée, transparente et sécurisée. Elle permet la transmission d'informations sans organe central de contrôle et prend la forme d'un registre de transactions ou d'opérations.`,
        },
        {
          id: 10,
          title: "Bloc de transactions",
          content: `Un bloc qui regroupe l'ensemble des transactions confirmées sur la blockchain sur une période précise.`,
        },
        {
          id: 11,
          title: "Bloc orphelin",
          content: `Bloc qui n'est inclus dans aucune blockchain valide (par exemple, vous risquez de générer un bloc orphelin si vous n'êtes pas le premier mineur à avoir miné le bloc).`,
        },
        {
          id: 13,
          title: "BTC",
          content: `BTC est le code ISO non officiel pour le Bitcoin..`,
        },
        {
          id: 14,
          title: "Bloc de transactions",
          content: `Un bloc qui regroupe l'ensemble des transactions confirmées sur la blockchain sur une période précise.`,
        },
        {
          id: 15,
          title: "Clé privée",
          content: `Clé de chiffrement privée. Celle-ci permet de chiffrer une transaction ou opération avant de la transmettre au réseau et fait office de signature. Elle permet d'authentifier l'auteur d'un ordre​.`,
        },
        {
          id: 17,
          title: "Clé publique",
          content: `Clé de déchiffrement publique. Cette clé est distribuée à tous les mineurs du réseau et permet de déchiffrer la transaction ou opération. De ce fait, l'auteur de l'ordre est confirmé.`,
        },
        {
          id: 18,
          title: "Client",
          content: `Un client est un logiciel qui exécute le protocole d'une blockchain. Les clients lites ne possèdent pas la copie entière de la blockchain depuis sa création.`,
        },
        {
          id: 19,
          title: "Confirmation",
          content: `Lorsqu'une transaction est confirmée, cela signifie qu'elle est définitivement inscrite sur le registre de la blockchain. On dit que la transaction a été confirmée n-fois, pour n-bloc suivant le bloc originel où la transaction est inscrite : plus le nombre de confirmation augmente, plus la transaction est sécurisée.`,
        },
        {
          id: 20,
          title: "Correction",
          content: `Chute brutale du cours d'une crypto-monnaie consécutive à une hausse.`,
        },
        {
          id: 21,
          title: "CPU (Central Processing Unit)",
          content: `Unité centrale de traitement. Le CPU est le cœur de l'ordinateur.`,
        },
        {
          id: 22,
          title: "Crypto-monnaie",
          content: `Une crypto-monnaie est une monnaie électronique supportée par un réseau informatique décentralisé (en pair à pair) et dont les transactions et l’émission reposent sur des algorithmes cryptographiques.`,
        },
        {
          id: 23,
          title: "Correction",
          content: `Chute brutale du cours d'une crypto-monnaie consécutive à une hausse.`,
        },
        {
          id: 24,
          title: "Cryptographie",
          content: `La cryptographie est une branche des mathématiques dont l'application est de chiffrer (puis dé-chiffrer) l'information.`,
        },
        {
          id: 25,
          title: "DApps",
          content: `Applications décentralisées, basées par exemple sur la blockchain Ethereum, supportées par des smart contracts.`,
        },
        {
          id: 26,
          title: "Day Trading",
          content: `Par opposition au "Holding", le "Day Trading" consiste à réaliser des transactions régulières sur des périodes allant de quelques heures à quelques jours.`,
        },
        {
          id: 27,
          title: "DCA (Dollar Cost Average)",
          content: `Stratégie consistant à investir régulièrement une part de son capital initial sur une longue période afin d'atténuer l'impact de la volatilité du marché.
`,
        },
        {
          id: 28,
          title: "DDoS (attaque par déni de service)",
          content: `Une Attaque par Déni de Service consiste à émettre un grand nombre de sollicitations envers une plateforme de services, afin de surcharger le serveur et bloquer la bande passante. Le service n'est plus accessible pour les utilisateurs légitimes.`,
        },
        {
          id: 29,
          title: "Difficulté",
          content: `Dans l'univers blockchain, la difficulté fait référence au travail nécessaire (puissance de calcul) pour miner un nouveau bloc. Celle-ci peut être automatiquement modulée pour obtenir un minage des blocs à un intervalle de temps régulier.`,
        },
        {
          id: 30,
          title: "ECDSA",
          content: `Elliptic Curve Digital Signature Algorithm (ECDSA) est un algorithme cryptographique de signature numérique.`,
        },
        {
          id: 31,
          title: "Faucet (robinet)",
          content: `Les sites faucets (robinets en anglais) distribuent gratuitement des bitcoins aux internautes en échange du visionnage d'une publicité, du remplissage d'un questionnaire ou d'un CAPTCHA.
​`,
        },
        {
          id: 32,
          title: "Fomo (Fear of missing out)",
          content: `Expression pouvant se traduire par "peur de rater quelque chose". L'action de "Fomo", sous-tend une décision prise de manière irrationnelle et impulsive. La peur guidant l'acte d'achat, l'attitude peut se généraliser à un ensemble d'individus achetant par peur de rater une opportunité et faisant ainsi monter le cours.`,
        },
        {
          id: 33,
          title: "FIAT money (monnaie FIAT ou Fiduciaire)",
          content: `Désigne les monnaies conventionnelles (Euro, Dollar, etc.).`,
        },
        {
          id: 34,
          title: "Fork (bifurcation)",
          content: `Bifurcation de la blockchain : une blockchain alternative est générée lorsqu'un groupe de mineurs exécutent un protocole modifié. Il peut s'agir d'un bug, d'une attaque malveillante ou être consécutive à la volonté des développeurs de changer le protocole pour améliorer la blockchain. La chaîne la plus longue est généralement reconnue comme la chaîne principale.`,
        },
        {
          id: 35,
          title: "Frais de transactions (fees)",
          content: `Frais de transactions donnés aux mineurs en récompense du minage du bloc dans lequel cette transaction sera incluse.`,
        },
        {
          id: 36,
          title: "FUD (Fear, Uncertainty, Doubt)",
          content: `Technique consistant à influencer la communauté par le biais d'informations négatives à travers les réseaux sociaux et les forums. L'objectif est généralement de faire baisser le cours.`,
        },
        {
          id: 37,
          title: "Genesis block (bloc de la genèse)",
          content: `Bloc Genesis est le premier bloc d'une blockchain.`,
        },
        {
          id: 38,
          title: "GPU (Graphics Processing Unit)",
          content: `Chute brutale du cours d'une crypto-monnaie consécutive à une hausse.`,
        },
        {
          id: 39,
          title: "Hachage",
          content: `Procédé mathématique qui, à partir d’une quantité de données en entrée, produit une sortie de taille fixe. La fonction de hachage a deux caractéristiques importantes : premièrement, il est mathématiquement difficile d’identifier la donnée initiale en regardant la donnée de sortie ; deuxièmement, en changeant une infime partie de l’entrée initiale, la donnée de sortie est alors complètement changée.`,
        },
        {
          id: 40,
          title: "Hashrate",
          content: `Indicateur déterminant la puissance de calcul d'un mineur ou d'un réseau de minage.`,
        },
        {
          id: 41,
          title: "Hold/Hodl",
          content: `Stratégie consistant à garder ses crypto-monnaies sur le long terme en supposant qu'elles vont gagner en valeur et perdurer.`,
        },
        {
          id: 42,
          title: "Lightning Network",
          content: `Le réseau Bitcoin  est actuellement techniquement limité (nombre de transactions/seconde, frais de transaction...). Le Lightning Network est le nom d'une technologie permettant de corriger ces limitations. Il pend la forme d'un réseau parallèle (off chain) venant épauler le réseau Bitcoin principal.`,
        },
        {
          id: 43,
          title: "Livre blanc",
          content: `Le "livre blanc" est la présentation technique et utilitaire d'une blockchain, généralement écrit par l'équipe de développement autour du projet.
`,
        },
        {
          id: 44,
          title: "mBTC",
          content: `mBTC correspond à un millième de bitcoin (0.001 BTC).`,
        },
        {
          id: 45,
          title: "MEW (MyEtherWallet)",
          content: `Service web permettant la création et la gestion d'un portefeuille Ethereum.`,
        },
        {
          id: 67,
          title: "Nœud du réseau",
          content: `Désigne les ordinateurs exécutant le protocole de la blockchain via un client.`,
        },
        {
          id: 88,
          title: "P2P (Peer-to-Peer)",
          content: `Modèle de réseau informatique décentralisé où chaque client est un serveur : le P2P peut servir au calcul distribué, à la communication et au partage de fichiers.`,
        },
        {
          id: 60,
          title: "Portefeuille",
          content: `Un portefeuille utilise un support de stockage pour conserver les clefs de chiffrement privées permettant de signer des opérations sur la blockchain.`,
        },
        {
          id: 61,
          title: "Pool",
          content: `Regroupement de mineurs. Permet de mettre en commun la puissance de calcul et de partager les gains.`,
        },
        {
          id: 62,
          title: "Pump / dump",
          content: `Hausse rapide sur une courte période du prix des actifs / chute rapide du prix des actifs.`,
        },
        {
          id: 46,
          title: "Preuve de travail (Proof of Work)",
          content: `Les règles de consensus Proof of Work (preuve de travail en Français), sont les règles régissant le bon fonctionnement de la Blockchain. Bitcoin repose sur une preuve de travail. En savoir plus.`,
        },
        {
          id: 47,
          title: "ROI (Return On Investment)",
          content: `Retour sur les investissements réalisés ((profit/investissement) * 100). Un ROI de 100 % équivaut à un investissement doublé.`,
        },
        {
          id: 48,
          title: "Satoshi",
          content: `Un Satoshi est la plus petite unité de Bitcoin disponible. Un Satoshi = 0.00000001 BTC.`,
        },
        {
          id: 49,
          title: "Scalabilité",
          content: `Capacité à changer d'échelle et à adapter le réseau à une augmentation des besoins en vue de faire face à divers problèmes comme que le ralentissement des temps de transactions et l'augmentation des frais d'utilisation. L'objectif est de maintenir les performances du réseau malgré un accroissement rapide des utilisateurs. La scalabilité est un grand défi pour les acteurs de l'univers blockchain.`,
        },
        {
          id: 50,
          title: "Scalping",
          content: `Stratégie visant à tirer profit des fluctuations des cours des crypto-monnaies à court terme (plusieurs transactions sur une même journée et un même marché). Cette stratégie est essentiellement utilisable sur des marchés à gros volumes.`,
        },
        {
          id: 51,
          title: "Segwit (Segregated Witness)",
          content: `Soft fork d'une crypto-monnaie permettant d'augmenter la capacité d'un bloc, le format et la sécurité des transactions.`,
        },
        {
          id: 52,
          title: "SHA-256",
          content: `SHA-256 est une fonction de hashage, utilisée entre-autre dans le chiffrement cryptographique de nombreuses crypto-monnaies.`,
        },
        {
          id: 53,
          title: "Sidechain",
          content: `Chaîne de blocs dont le point de départ (premier bloc/genesis bloc) est celui d'une autre blockchain (chaîne principale).`,
        },
        {
          id: 54,
          title: "Stop-Loss",
          content: `Action visant à sécuriser son investissement en cas de chute du cours en plaçant un ordre de vente en dessous du prix d'achat. Le prix de vente fixé correspond à la perte maximale acceptable par l'investisseur. La position est soldée automatiquement.`,
        },
        {
          id: 56,
          title: "Testnet",
          content: `Tesnet est un réseau alternatif utilisé pour tester des blockchains avant leur lancements grand public.`,
        },
      ],
      lexiques_search_result: [],
      data: [],
      search_field: "",
    };
  },
  mounted() {
    this.lexiques_search_result = this.lexiques;
  },
  watch: {
    search_field: function (valeur) {
      this.lexiques_search_result = this.lexiques.filter((lexique) => {
        if (valeur == "") return this.lexiques;

        if (lexique.title.toUpperCase().indexOf(valeur.toUpperCase()) > -1) {
          return this.data.push(lexique);
        }
      });
    },
  },
  methods: {},
};
</script>

<style>
/* .panel::after {
  content: "▲";
  color: rgb(255, 255, 255);
  top: -2px;
  right: 0px;
  position: absolute;
  font-family: "FontAwesome";
}

.collapse.show{

}

.panel[aria-expanded="true"]::after {
   content: "▼";
} */
.container{
  font-family: fsl;
}
button[data-toggle="collapse"]::after {
  content: "▼";
  color: rgb(255, 255, 255);
  top: -2px;
  right: 0px;
  position: absolute;
}

button[data-toggle="collapse"].collapsed::after {
  content: "▲";
}

@media screen and (max-width: 540px) {
  .title {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .title > .elt:nth-child(1){
    margin-bottom: 5px;
  }
  .title > .elt{
    width: 100% !important;
    text-align: center;
  }
}
</style>