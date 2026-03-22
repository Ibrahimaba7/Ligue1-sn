// Données partagées entre toutes les pages
const SharedData = {
    // ========================================================================
    // 1. DONNÉES INITIALES
    // ========================================================================
    teams: [
        { id: 1, name: 'AJEL de Rufisque', logo: 'AJEL de Rufisque.png', site: '#' },
        { id: 2, name: 'ASC Jaraaf', logo: 'ASC Jaraaf.png', site: 'https://fr.besoccer.com/equipe/jaraaf' },
        { id: 3, name: 'AS Dakar', logo: 'AS Dakar.jpg', site: '#' },
        { id: 4, name: 'Camberene', logo: 'Camberene.png', site: '#' },
        { id: 5, name: 'Casa Sport', logo: 'Casa Sport.png', site: '#' },
        { id: 6, name: 'Gédiawaye FC', logo: 'Gédiawaye FC.png', site: '#' },
        { id: 7, name: 'Génération Foot', logo: 'Génération Foot.png', site: 'https://asgenerationfoot.com/' },
        { id: 8, name: 'HLM', logo: 'HLM.png', site: '#' },
        { id: 9, name: 'La Linguère', logo: 'La Linguère.png', site: '#' },
        { id: 10, name: 'Pikine', logo: 'Pikine.png', site: '#' },
        { id: 11, name: 'Sonacos', logo: 'Sonacos.png', site: '#' },
        { id: 12, name: 'Stade de Mbour', logo: 'Stade de Mbour.png', site: '#' },
        { id: 13, name: 'Teungueth FC', logo: 'Teungueth FC.png', site: '#' },
        { id: 14, name: 'US Gorée', logo: 'US Goree.png', site: 'https://fr.besoccer.com/equipe/us-goree' },
        { id: 15, name: 'US Ouakam', logo: 'US Ouakam.png', site: 'https://fr.besoccer.com/equipe/ouakam' },
        { id: 16, name: 'Wally Daan', logo: 'Wally Daan.png', site: '#' }
    ],

    // Matchs complets pour plusieurs journées
    matches: [
        // Journée 1
        { id: 1, journey: 1, date: '2026-03-01', time: '16:00', homeTeam: 2, awayTeam: 14, homeScore: 2, awayScore: 1, stadium: 'Stade Léopold Sédar Senghor', status: 'finished' },
        { id: 2, journey: 1, date: '2026-03-01', time: '16:00', homeTeam: 7, awayTeam: 5, homeScore: 1, awayScore: 0, stadium: 'Stade Lat Dior', status: 'finished' },
        { id: 3, journey: 1, date: '2026-03-02', time: '16:00', homeTeam: 1, awayTeam: 3, homeScore: 0, awayScore: 0, stadium: 'Stade Municipal', status: 'finished' },
        { id: 4, journey: 1, date: '2026-03-02', time: '18:00', homeTeam: 13, awayTeam: 16, homeScore: 3, awayScore: 2, stadium: 'Stade Ngalandou Diouf', status: 'finished' },
        { id: 5, journey: 1, date: '2026-03-03', time: '16:00', homeTeam: 4, awayTeam: 6, homeScore: 1, awayScore: 1, stadium: 'Stade de Camberene', status: 'finished' },
        { id: 6, journey: 1, date: '2026-03-03', time: '18:00', homeTeam: 8, awayTeam: 9, homeScore: 2, awayScore: 0, stadium: 'Stade HLM', status: 'finished' },
        { id: 7, journey: 1, date: '2026-03-04', time: '16:00', homeTeam: 10, awayTeam: 11, homeScore: 1, awayScore: 2, stadium: 'Stade de Pikine', status: 'finished' },
        { id: 8, journey: 1, date: '2026-03-04', time: '18:00', homeTeam: 12, awayTeam: 15, homeScore: 0, awayScore: 1, stadium: 'Stade de Mbour', status: 'finished' },
        
        // Journée 2
        { id: 9, journey: 2, date: '2026-03-08', time: '16:00', homeTeam: 14, awayTeam: 2, homeScore: 1, awayScore: 1, stadium: 'Stade de Gorée', status: 'finished' },
        { id: 10, journey: 2, date: '2026-03-08', time: '18:00', homeTeam: 5, awayTeam: 7, homeScore: 0, awayScore: 2, stadium: 'Stade de Ziguinchor', status: 'finished' },
        { id: 11, journey: 2, date: '2026-03-09', time: '16:00', homeTeam: 3, awayTeam: 1, homeScore: 2, awayScore: 1, stadium: 'Stade de Dakar', status: 'finished' },
        { id: 12, journey: 2, date: '2026-03-09', time: '18:00', homeTeam: 16, awayTeam: 13, homeScore: 0, awayScore: 0, stadium: 'Stade de Wally', status: 'finished' },
        { id: 13, journey: 2, date: '2026-03-10', time: '16:00', homeTeam: 6, awayTeam: 4, homeScore: 2, awayScore: 1, stadium: 'Stade de Gédiawaye', status: 'finished' },
        { id: 14, journey: 2, date: '2026-03-10', time: '18:00', homeTeam: 9, awayTeam: 8, homeScore: 1, awayScore: 3, stadium: 'Stade de Linguère', status: 'finished' },
        { id: 15, journey: 2, date: '2026-03-11', time: '16:00', homeTeam: 11, awayTeam: 10, homeScore: 1, awayScore: 0, stadium: 'Stade de Sonacos', status: 'finished' },
        { id: 16, journey: 2, date: '2026-03-11', time: '18:00', homeTeam: 15, awayTeam: 12, homeScore: 2, awayScore: 2, stadium: 'Stade de Ouakam', status: 'finished' },
        
        // Journée 3 (avec un match en direct et des matchs à venir)
        { id: 17, journey: 3, date: new Date().toISOString().split('T')[0], time: '16:00', homeTeam: 2, awayTeam: 7, homeScore: 1, awayScore: 1, stadium: 'Stade Léopold Sédar Senghor', status: 'live' },
        { id: 18, journey: 3, date: new Date().toISOString().split('T')[0], time: '18:00', homeTeam: 14, awayTeam: 5, homeScore: 0, awayScore: 0, stadium: 'Stade de Gorée', status: 'upcoming' },
        { id: 19, journey: 3, date: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0], time: '16:00', homeTeam: 1, awayTeam: 13, homeScore: 0, awayScore: 0, stadium: 'Stade Municipal', status: 'upcoming' },
        { id: 20, journey: 3, date: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0], time: '18:00', homeTeam: 3, awayTeam: 16, homeScore: 0, awayScore: 0, stadium: 'Stade de Dakar', status: 'upcoming' },
        { id: 21, journey: 3, date: new Date(new Date().setDate(new Date().getDate() + 2)).toISOString().split('T')[0], time: '16:00', homeTeam: 4, awayTeam: 8, homeScore: 0, awayScore: 0, stadium: 'Stade de Camberene', status: 'upcoming' },
        { id: 22, journey: 3, date: new Date(new Date().setDate(new Date().getDate() + 2)).toISOString().split('T')[0], time: '18:00', homeTeam: 6, awayTeam: 9, homeScore: 0, awayScore: 0, stadium: 'Stade de Gédiawaye', status: 'upcoming' },
        { id: 23, journey: 3, date: new Date(new Date().setDate(new Date().getDate() + 3)).toISOString().split('T')[0], time: '16:00', homeTeam: 10, awayTeam: 12, homeScore: 0, awayScore: 0, stadium: 'Stade de Pikine', status: 'upcoming' },
        { id: 24, journey: 3, date: new Date(new Date().setDate(new Date().getDate() + 3)).toISOString().split('T')[0], time: '18:00', homeTeam: 11, awayTeam: 15, homeScore: 0, awayScore: 0, stadium: 'Stade de Sonacos', status: 'upcoming' }
    ],

    ranking: [], // Sera calculé automatiquement

    // ========================================================================
    // 2. FONCTIONS DE GESTION DES DONNÉES
    // ========================================================================
    calculateRanking() {
        const rankingMap = new Map();
        
        this.teams.forEach(team => {
            rankingMap.set(team.id, {
                teamId: team.id,
                points: 0,
                played: 0,
                wins: 0,
                draws: 0,
                losses: 0,
                gf: 0,
                ga: 0,
                gd: 0,
                rank: 0
            });
        });

        this.matches.filter(m => m.status === 'finished').forEach(match => {
            const home = rankingMap.get(match.homeTeam);
            const away = rankingMap.get(match.awayTeam);

            if (home) {
                home.played++;
                home.gf += match.homeScore;
                home.ga += match.awayScore;
                
                if (match.homeScore > match.awayScore) {
                    home.wins++;
                    home.points += 3;
                } else if (match.homeScore === match.awayScore) {
                    home.draws++;
                    home.points += 1;
                } else {
                    home.losses++;
                }
            }

            if (away) {
                away.played++;
                away.gf += match.awayScore;
                away.ga += match.homeScore;
                
                if (match.awayScore > match.homeScore) {
                    away.wins++;
                    away.points += 3;
                } else if (match.awayScore === match.homeScore) {
                    away.draws++;
                    away.points += 1;
                } else {
                    away.losses++;
                }
            }
        });

        rankingMap.forEach(team => {
            team.gd = team.gf - team.ga;
        });

        this.ranking = Array.from(rankingMap.values());
        this.sortRanking();
    },

    sortRanking() {
        this.ranking.sort((a, b) => {
            if (a.points !== b.points) return b.points - a.points;
            if (a.gd !== b.gd) return b.gd - a.gd;
            return b.gf - a.gf;
        });
        
        this.ranking.forEach((team, index) => {
            team.rank = index + 1;
        });
    },

    saveToStorage() {
        localStorage.setItem('snLigue1Data', JSON.stringify({
            teams: this.teams,
            matches: this.matches,
            ranking: this.ranking
        }));
        this.notifyChange();
    },

    loadFromStorage() {
        const saved = localStorage.getItem('snLigue1Data');
        if (saved) {
            try {
                const data = JSON.parse(saved);
                this.teams = data.teams || this.teams;
                this.matches = data.matches || this.matches;
                this.ranking = data.ranking || [];
                if (this.ranking.length === 0) {
                    this.calculateRanking();
                }
            } catch (e) {
                console.error("Erreur de chargement des données", e);
                this.calculateRanking();
            }
        } else {
            this.calculateRanking();
        }
    },

    getTeamName(teamId) {
        const team = this.teams.find(t => t.id === teamId);
        return team ? team.name : 'Inconnu';
    },

    getTeamLogo(teamId) {
        const team = this.teams.find(t => t.id === teamId);
        return team ? team.logo : '';
    },

    // Système d'événements
    eventListeners: [],

    addEventListener(callback) {
        this.eventListeners.push(callback);
    },

    notifyChange() {
        this.eventListeners.forEach(callback => callback());
    }
};

// Charger les données au démarrage
SharedData.loadFromStorage();
SharedData.saveToStorage();