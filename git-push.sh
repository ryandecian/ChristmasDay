#Attention, pour lancer cette commande il faudra : 

#Lancer la commande suivante dans le terminal git :
# chmod +x git-push.sh
#Copier coller cette ligne dans package.json dans script :
# "commit": "./git-push.sh"
#Exécution de cette commande avec :
# npm run commit

#!/bin/bash

# Affiche l'état actuel du dépôt
git status

# Demande le message de commit
read -p "Entrez votre message de commit : " msg

# Récupère uniquement les fichiers modifiés
files=$(git diff --name-only)

# Vérifie s'il y a des fichiers modifiés
if [ -z "$files" ]; then
  echo "❌ Aucun fichier modifié. Commit annulé."
  exit 1
fi

# Ajoute uniquement les fichiers modifiés
git add $files

# Crée un fichier temporaire pour le message de commit
echo "$msg" > .gitmessage.txt

# Effectue le commit
git commit -F .gitmessage.txt

# Supprime le fichier temporaire
rm .gitmessage.txt

# Récupère le nom de la branche actuelle
branch=$(git rev-parse --abbrev-ref HEAD)

# Pousse sur la branche courante
echo "✅ Commit réussi, envoi sur la branche '$branch'..."
git push origin "$branch" || { echo "❌ Erreur : Push échoué."; exit 1; }
