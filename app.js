angular.module('fantasy', [])

angular.module('fantasy')
	.factory('userFactory', function(){

		var userList = []

		var User = function(name, email, password){

			this.name = name
			this.email = email
			this.password = password
			this.currentTeam = {qb: '', wr1: '', wr2: '', rb: '', felx: '', te: '', dst: '', k: '' }
			this.playersUsed = {qb: [], wr1: [], wr2: [], rb: [], felx: [], te: [], dst: [], k: [] }
			this.record = [{wins: 0, losses: 0, points: 0}]

			userList.push(this)

		}

		new User("Erich Robinson", "robinson.erich@gmail.com", "1234pass")

		return {
			User: User,
			userList: userList
		}

		

	})



angular.module('fantasy')
	.controller('MainController', ['$scope', 'userFactory', function($scope, userFactory){
		
		$scope.newName = ''
		$scope.newEmail = ''
		$scope.newPassword = ''

		$scope.showNews = false

		$scope.showQB = true

		$scope.showRB = true

		$scope.currentUser = userFactory.userList[0]

		$scope.allQB = [
			{
				name: "Peyton Manning", 
				team: "Denver Broncos", 
				projected: 20, 
				points: {week1: 4.90 , week2: 20.24, week3: 21.86}, 
				opponents:{week1: "Baltimore Ravens", week2: "Kansas City Chiefs", week3: "Detroit Lions", week4: "Minnesota Vikings"},	
				news: "Manning showed more command of the offense with the Broncos running most of their plays out of shotgun. His first touchdown was a 45-yard catch-and-run by Demaryius Thomas, and his second came on a fourth-quarter fade to Owen Daniels. It's the second straight multi-TD game for Manning after his disaster Week 1, but Gary Kubiak's scheme and decline concerns remain going forward. Through three weeks, Manning has 755 yards and a 5:3 TD/INT ratio. Manning will be a mid-range QB1 against the Vikings in Week 4."
			},
			{name: "Aaron Rodgers", 
			team: "Green Bay Packers", 
			projected: 24, 
			points: {week1: 23.06 , week2: 22.26, week3: 37.92}, 
			opponents:{week1: "Chicago Bears", week2: "Seattle Seahwaks", week3: "Kansas City Chiefs", week4: "San Francisco 49ers"},
			news: "This game wasn't nearly as close as the final score would suggest. Rodgers and the Packers jumped out to a comfortable 31-7 lead before Alex Smith and the Chiefs poked away during a garbage time-filled fourth quarter. Rodgers was incredible, as always, at Lambeau Field, finding the weaknesses in the Chiefs' defense, particularly in the slot, and exploiting it over and over again. He's now gone 16 consecutive regular-season starts without throwing an interception at home. Three of Rodgers' five scores went to Randall Cobb, and all came on essentially the same exact play. His other two went to James Jones and Ty Montgomery. The Packers travel to dumpster-fire San Francisco in Week 4."
			},
			
			{name: "Tyrod Taylor", 
			team: "Buffalo Bills", 
			projected: 18, 
			points: {week1: 17.9 , week2: 25.98, week3: 24.28}, 
			opponents:{week1: "Indianapolis Colts", week2: "New England Patriots", week3: "Miami Dolphins", week4: "New York Giants"},
			news: "Taylor added three rushes for 12 yards. The impressive first-year starter got to trade in his helmet for a baseball hat with eight minutes left in the game, as he and the Bills simply ran the Dolphins off their home field. Taylor continued to drop dimes, showing impressive ball placement, and a great sense of anticipation. His 38-yard touchdown to Chris Hogan in the fourth quarter — seriously — was a timing throw befitting of Peyton Manning or Tom Brady. There was a scary moment in the first half where Taylor got his left leg bent backwards on an awkward slide, but he ended up no worse for the wear. The Bills are still going to ask Tayor to caretake more than playmake, but he's shown he's capable of both. He'll be in the QB1 conversation for next week's matchup with the Giants' struggling defense"
		},
		]

		$scope.allRB = [
			{
				name: "C.J. Anderson", 
				team: "Denver Broncos", 
				projected: 20, 
				points: {week1: 4.90 , week2: 20.24, week3: 21.86}, 
				opponents:{week1: "Baltimore Ravens", week2: "Kansas City Chiefs", week3: "Detroit Lions", week4: "Minnesota Vikings"},	
				news: "'We have to keep C.J. on the field. C.J. has been coming off the field the past three games because he's been nicked up,' Kubiak said. 'Things are going on, and we need to keep him on the field consistently.' Anderson has missed time in the first three games with ankle, toe and head injuries. He has managed to play through all three ailments, but he and the rest of the Broncos running attack has struggled. The positive to take away from these comments is it sounds like Anderson is still the lead back over Ronnie Hillman. Anderson will be a low-end RB2 against the Vikings this week."
			},
			{name: "Eddie Lacy", 
			team: "Green Bay Packers", 
			projected: 24, 
			points: {week1: 23.06 , week2: 22.26, week3: 37.92}, 
			opponents:{week1: "Chicago Bears", week2: "Seattle Seahwaks", week3: "Kansas City Chiefs", week4: "San Francisco 49ers"},
			news: "Lacy, battling a low-ankle sprain earlier in the week, got the start and looked reasonably healthy, but still split the load with James Starks, who out-carried Lacy 17-10. However, Starks only managed 32 yards on the ground. Lacy wasn't afraid to cut on his balky ankle and looked smooth doing it. He and Starks may again split work in Week 4 against San Francisco because it's a short week. But we can confidently fire Lacy up as an RB1 against the lowly 49ers."
			},
			
			{name: "Karlos Williams", 
			team: "Buffalo Bills", 
			projected: 18, 
			points: {week1: 17.9 , week2: 25.98, week3: 24.28}, 
			opponents:{week1: "Indianapolis Colts", week2: "New England Patriots", week3: "Miami Dolphins", week4: "New York Giants"},
			news: "With LeSean McCoy (hamstring) relegated to the sideline for much of Sunday's game, Williams saw 12 carries against the Dolphins. He turned them into 110 yards and his third touchdown in as many games. Rex Ryan admitted after the game McCoy is not close to 100 percent, and there have been rumblings McCoy could be sat down for a week to get back to full health. With more work and the potential for a starting role in his future, Williams needs to be owned in all leagues."
		},
		]

		$scope.userTest = function(){
			new userFactory.User($scope.newName, $scope.newEmail, $scope.newPassword)
			console.log(userFactory.userList)
			$scope.newName = ''
			$scope.newEmail = ''
			$scope.newPassword = ''
		}

		$scope.addToRoster = function(player){
			$scope.currentUser.currentTeam.qb = player
			console.log($scope.currentUser)
		}

		$scope.addToRosterRB = function(player){
			$scope.currentUser.currentTeam.rb = player
			console.log($scope.currentUser)
		}

		$scope.showQB = function(){
			if($scope.showQB === false){
				$scope.showQB = true
			}
			else{
				console.log("test")
			}
			$scope.showRB = false
		}

		$scope.showRB = function(){
			if($scope.showRB === false){
				$scope.showRB = true
			}
			else{
				console.log("test")
			}
			$scope.showQB = false
		}

		console.log(userFactory.userList)
		console.log($scope.currentUser)
	}])