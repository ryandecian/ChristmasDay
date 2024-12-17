#!/bin/bash

# Vérifie si un message de commit a été passé
if [ -z "$1" ]; then
  echo "Erreur : Vous devez fournir un message pour le commit."
  exit 1
fi

# Exécute les commandes git
git add .
git commit -m "$1"
git push

# Exécute maintenant la commande dans le terminal :