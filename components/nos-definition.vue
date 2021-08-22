<template>
  <div class="container">
    <div class="row">
      <h2 class="col-md-12 text-center">Qu’est-ce que la Blockchain ?</h2>
      <p class="col-md-12 text-justify"><br/>
        Déployée à partir de 2008, la blockchain est une technologie de stockage
        et de transmission d’informations prenant la forme d'une base de données
        qui a la particularité d’être partagée simultanément avec tous ses
        utilisateurs.Cette technologie a pour avantage d'être rapide et
        sécurisée.<br />
        Lorsque blockchain publique, cette technologie peut fonctionner sans
        organe central de contrôle conformément au consensus de validation des
        transactions et des blocsLorsque la blockchain privée, des règles
        d’accès et fonctionnement peuvent être définies en amont : le consensus
        Plus concrètement, la blockchain permet à ses utilisateurs, connectés en
        réseau, de partager et de consulter des données sans intermédiaire.<br />
        Le champ d'application de la blockchain est bien plus large que celui des cryptomonnaies / cryptoactifs 
        (assurance, sport, finance, immobilier, art, logistique, énergie, industrie, santé, agriculture, services, hôtellerie, ...)<br /><br />
        <b class="heightLight">Blockchain publique</b> :Lorsque l’historique des informations et des transactions 
        d’une blockchain est accessible et ouverte à tout le monde, on parle de Blockchain publique.
        Exemple : <a class="heightLight" target="_blank"  href="https://ethereum.org/fr">La blockchain ETHEREUM </a> (ETHscan) <a class="heightLight" target="_blank" href="https://academy.binance.com/fr/articles/an-introduction-to-binance-smart-chain-bsc">La Blockchain Binance Smart Chain</a> (Bscan)<br/>
        <b class="heightLight">Blockchain Privée</b> : Lorsqu’une Blockchain est conçue pour les besoins spécifiques d’une entreprise, d’une organisation ou d’un consortium. On parle d’une blockchain privée, car l’accès à l’inscription, à la consultation et au partage des informations de la blockchain peut être restreint à des utilisateurs bien définis.Les blockchains privées sont recommandées pour les entreprises et les institutions
      </p>
      <h2 class="col-md-12 text-center"><br/>
        Caractéristiques
      </h2>
      <p class="col-md-12 text-justify">
        En pratique, une blockchain est une base de données qui contient l’historique de tous les échanges effectués entre ses utilisateurs depuis sa création. Les principales caractéristiques sont :
        <ul>
          <li>L’identification de chaque partie s’effectue par un procédé cryptographique</li>
          <li>La transaction est envoyée à un réseau (ou « nœud » de stockage) d’ordinateurs situés dans le monde entier (participants au réseau)</li>
          <li>Chaque « nœud » héberge une copie de la base de données. L’historique de toutes les transactions effectuées est inscrit dans cette base de données qui est simultanément accessible et consultable par tous les participants du réseau.</li>
          <li>Le consensus de validation sécurise le réseau. Le mécanisme de consensus définie les règles qui permettent de valider et d’ajouter des informations sur tous les « nœuds ». Avant l’ajout des informations aux « nœuds », les « Mineurs » ou « validateurs » déchiffrent et authentifient les données puis valident les transactions qui sont ensuite ajoutées dans la base de données sous forme d’un bloc de données chiffrées (c’est le « block » dans blockchain)</li>
          <li>La Chaîne de block : Chaque nouveau bloc ajouté à la blockchain est lié au précédent et une copie est transmise à tous les « nœuds » du réseau. L’intégration est chronologique, indélébile et infalsifiable</li>
        </ul>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: []
    }
  }
};
</script>

<style scoped>
.heightLight{
  color: #2a80b9;;
}
</style>