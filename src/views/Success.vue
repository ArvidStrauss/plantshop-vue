<template>
  <div class="success">
    <div class="jumbotron text-center">
      <h1 class="display-3">Vielen Dank für Ihren Einkauf!</h1>
      <p class="lead">
        <strong>Überprüfen Sie Ihren E-Mail Ordner</strong> für weitere Details.
      </p>
      <hr />
      <p>Haben Sie Probleme? <a href="">Kontaktieren Sie uns</a></p>
      <p class="lead">
        <router-link
          class="btn btn-primary"
          :to="'/' + $i18n.locale"
          role="button"
          >Zurück zur Startseite</router-link
        >
      </p>
    </div>
  </div>
</template>
