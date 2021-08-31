<template>
  <div class="container">
    <div class="row m-0">
      <div class="col-md-12 text-center">
        <h2 class="col-md-12 title text-center"><img src="~/assets/img/title/blockchain.gif" height="300px" width="auto" /></h2>
      </div>
      <h2 class="col-md-12 text-center">Qu’est-ce que la Blockchain ?</h2>
      <p class="col-md-12 text-justify"><br/>
        Déployée à partir de 2008, la blockchain est une technologie de stockage et de transmission d’informations prenant la forme d'une base de données qui a la particularité d’être partagée simultanément avec tous ses utilisateurs.<br />
        Cette technologie a pour avantage d'être rapide et sécurisée. 
Lorsque la blockchain est publique, elle peut fonctionner sans organe central de contrôle conformément au consensus de validation des transactions et des blocs.
Lorsque la blockchain est privée, des règles d’accès et de fonctionnement peuvent être définies en amont : le consensus.<br />
Plus concrètement, la blockchain permet à ses utilisateurs, connectés en réseau, de partager et de consulter des données sans intermédiaire.<br/>
        Le champ d'application de la blockchain est bien plus large que celui des cryptomonnaies / cryptoactifs (assurance, sport, finance, immobilier, art, logistique, énergie, industrie, santé, agriculture, services, hôtellerie, ...)<br /><br />
        <b class="heightLight">Blockchain publique</b> :Lorsque l’historique des informations et des transactions d’une blockchain est accessible et ouvert à tout le monde, on parle de blockchain publique.<br />
        Exemple : <a class="heightLight" target="_blank"  href="https://ethereum.org/fr">La Blockchain ETHEREUM </a> (ETHscan) <a class="heightLight" target="_blank" href="https://academy.binance.com/fr/articles/an-introduction-to-binance-smart-chain-bsc">la Blockchain Binance Smart Chain</a> (Bscan)<br/>
        <b class="heightLight">Blockchain privée</b> : Lorsqu’une Blockchain est conçue pour les besoins spécifiques d’une entreprise, d’une organisation ou d’un consortium, on parle d’une blockchain privée, car l’accès à l’inscription, à la consultation et au partage des informations de la blockchain peut être restreint à des utilisateurs bien définis.<br />
        Les blockchains privées sont recommandées pour les entreprises et les institutions.
      </p>
      <h2 class="col-md-12 text-center"><br/>
        Caractéristiques
      </h2>
      <p class="col-md-12 text-justify">
        En pratique, une blockchain est une base de données qui contient l’historique de tous les échanges effectués entre ses utilisateurs depuis sa création. Les principales caractéristiques sont :
        <ul>
          <li><strong>L’identification</strong> de chaque partie s’effectue par un procédé cryptographique</li>
          <li><strong>La transaction</strong> est envoyée à un réseau (ou « nœud » de stockage) d’ordinateurs situés dans le monde entier (participants au réseau)</li>
          <li>Chaque <strong>« nœud »</strong> héberge une copie de la base de données. L’historique de toutes les transactions effectuées est inscrit dans cette base de données qui est simultanément accessible et consultable par tous les participants du réseau.</li>
          <li><strong>Le consensus de validation</strong> sécurise le réseau. Le mécanisme de consensus définit les règles qui permettent de valider et d’ajouter des informations sur tous les « nœuds ». 
Avant l’ajout des informations aux « nœuds », les « mineurs » ou « validateurs » déchiffrent et authentifient les données puis valident les transactions qui sont ensuite ajoutées dans la base de données sous forme d’un bloc de données chiffrées (c’est le « block » dans blockchain)</li>
          <li><strong>La chaîne de blocs</strong> : Chaque nouveau bloc ajouté à la blockchain est lié au précédent et une copie est transmise à tous les « nœuds » du réseau. L’intégration de ces blocs est chronologique et les informations qu’ils contiennent sont indélébiles et infalsifiables.</li>
        </ul>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
    };
  },
};
</script>

<style scoped>
.heightLight {
  color: #2a80b9;
}
@media screen and (max-width: 540px) {
  .title > img{
   width: 100%;
  }
}
</style>