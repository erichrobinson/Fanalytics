angular.module('fantasy', ['ui.bootstrap', 'chart.js'])

angular.module('fantasy')
	.factory('userFactory', function(){

		var userList = []

		var User = function(firstName, lastName, email, password){

			this.firstName = firstName
			this.lastName = lastName
			this.email = email
			this.password = password
			this.currentTeam = {qb: '', rb: '', wr1: '', wr2: '', flex: '', te: '', dst: '', k: '' }
			this.playersUsed = {qb: [], wr1: ["Sammy Watkins"], rb: [], te: [], dst: [], k: [] }
			this.record = [{wins: 0, losses: 0, points: 0}]

			userList.push(this)

		}

		new User("Erich", "Robinson", "robinson.erich@gmail.com", "1234pass")

		return {
			User: User,
			userList: userList
		}
	})
// QB FACTORY
angular.module('fantasy')
	.factory('qbFactory', function(){

		var qbList = []

		var compareList = []

		var QB = function(name, team, projected, points, opponents, news, image){

			this.name = name,
			this.team = team,
			this.projected = projected,
			this.points = points
			this.totalPoints = Math.floor(points.reduce(function(total, num){ return total + num }
  				, 0))
			this.chart = createChart(this.points)
			this.news = news
			this.image = image

			qbList.push(this)

		}

		var createChart = function(points){
				var newchart = [[]]
				for(each in points){
					newchart[0].push(points[each])
				}
				newchart.push([15.29, 22.83, 28.02])
				return newchart
		}


		new QB("Peyton Manning", "Denver Broncos", 20, [4.9, 20.24, 21.86], {week1: "Baltimore Ravens", week2: "Kansas City Chiefs", week3: "Detroit Lions", week4: "Minnesota Vikings"}, "Manning showed more command of the offense with the Broncos running most of their plays out of shotgun. His first touchdown was a 45-yard catch-and-run by Demaryius Thomas, and his second came on a fourth-quarter fade to Owen Daniels. It's the second straight multi-TD game for Manning after his disaster Week 1, but Gary Kubiak's scheme and decline concerns remain going forward. Through three weeks, Manning has 755 yards and a 5:3 TD/INT ratio. Manning will be a mid-range QB1 against the Vikings in Week 4.")
		new QB("Aaron Rodgers", "Green Bay Packers", 24, [23.06, 22.26, 37.92], {week1: "Chicago Bears", week2: "Seattle Seahwaks", week3: "Kansas City Chiefs", week4: "San Francisco 49ers"}, "This game wasn't nearly as close as the final score would suggest. Rodgers and the Packers jumped out to a comfortable 31-7 lead before Alex Smith and the Chiefs poked away during a garbage time-filled fourth quarter. Rodgers was incredible, as always, at Lambeau Field, finding the weaknesses in the Chiefs' defense, particularly in the slot, and exploiting it over and over again. He's now gone 16 consecutive regular-season starts without throwing an interception at home. Three of Rodgers' five scores went to Randall Cobb, and all came on essentially the same exact play. His other two went to James Jones and Ty Montgomery. The Packers travel to dumpster-fire San Francisco in Week 4.")
		new QB("Tyrod Taylor", "Buffalo Bills", 18, [17.9, 25.98, 24.28], {week1: 17.9 , week2: 25.98, week3: 24.28}, "Taylor added three rushes for 12 yards. The impressive first-year starter got to trade in his helmet for a baseball hat with eight minutes left in the game, as he and the Bills simply ran the Dolphins off their home field. Taylor continued to drop dimes, showing impressive ball placement, and a great sense of anticipation. His 38-yard touchdown to Chris Hogan in the fourth quarter — seriously — was a timing throw befitting of Peyton Manning or Tom Brady. There was a scary moment in the first half where Taylor got his left leg bent backwards on an awkward slide, but he ended up no worse for the wear. The Bills are still going to ask Tayor to caretake more than playmake, but he's shown he's capable of both. He'll be in the QB1 conversation for next week's matchup with the Giants' struggling defense")
		new QB("Eli Manning", "New York Giants", 20, [8.52, 21.98, 19.16], {week1: "Baltimore Ravens", week2: "Kansas City Chiefs", week3: "Detroit Lions", week4: "Minnesota Vikings"}, "Manning showed more command of the offense with the Broncos running most of their plays out of shotgun. His first touchdown was a 45-yard catch-and-run by Demaryius Thomas, and his second came on a fourth-quarter fade to Owen Daniels. It's the second straight multi-TD game for Manning after his disaster Week 1, but Gary Kubiak's scheme and decline concerns remain going forward. Through three weeks, Manning has 755 yards and a 5:3 TD/INT ratio. Manning will be a mid-range QB1 against the Vikings in Week 4.")
		new QB("Matt Ryan", "Atlanta Falcons", 24, [16.62, 21.42, 23.10], {week1: "Chicago Bears", week2: "Seattle Seahwaks", week3: "Kansas City Chiefs", week4: "San Francisco 49ers"}, "This game wasn't nearly as close as the final score would suggest. Rodgers and the Packers jumped out to a comfortable 31-7 lead before Alex Smith and the Chiefs poked away during a garbage time-filled fourth quarter. Rodgers was incredible, as always, at Lambeau Field, finding the weaknesses in the Chiefs' defense, particularly in the slot, and exploiting it over and over again. He's now gone 16 consecutive regular-season starts without throwing an interception at home. Three of Rodgers' five scores went to Randall Cobb, and all came on essentially the same exact play. His other two went to James Jones and Ty Montgomery. The Packers travel to dumpster-fire San Francisco in Week 4.")
		new QB("Russell Wilson", "Seattle Seahwaks", 18, [15.14, 22.04, 16.20], {week1: 17.9 , week2: 25.98, week3: 24.28}, "Taylor added three rushes for 12 yards. The impressive first-year starter got to trade in his helmet for a baseball hat with eight minutes left in the game, as he and the Bills simply ran the Dolphins off their home field. Taylor continued to drop dimes, showing impressive ball placement, and a great sense of anticipation. His 38-yard touchdown to Chris Hogan in the fourth quarter — seriously — was a timing throw befitting of Peyton Manning or Tom Brady. There was a scary moment in the first half where Taylor got his left leg bent backwards on an awkward slide, but he ended up no worse for the wear. The Bills are still going to ask Tayor to caretake more than playmake, but he's shown he's capable of both. He'll be in the QB1 conversation for next week's matchup with the Giants' struggling defense")

		return {
			QB: QB,
			qbList: qbList,
			compareList: compareList
		}

	})

// RB FACTORY

angular.module('fantasy')
	.factory('rbFactory', function(){

		var rbList = []

		var RB = function(name, team, projected, points, opponents, news, image){

			this.name = name,
			this.team = team,
			this.projected = projected,
			this.points = points
			this.totalPoints = Math.floor(points.reduce(function(total, num){ return total + num }
  				, 0))
			this.chart = createChart(this.points)
			this.news = news
			this.image = image

			rbList.push(this)

		}

		var createChart = function(points){
				var newchart = [[]]
				for(each in points){
					newchart[0].push(points[each])
				}
				newchart.push([11.73, 5, 11.8])
				return newchart
		}


		new RB( "C.J. Anderson", 
				"Denver Broncos", 
				7, 
				[6.80 , 3.40, 3.20], 
				{week1: "Baltimore Ravens", week2: "Kansas City Chiefs", week3: "Detroit Lions", week4: "Minnesota Vikings"},	
				"'We have to keep C.J. on the field. C.J. has been coming off the field the past three games because he's been nicked up,' Kubiak said. 'Things are going on, and we need to keep him on the field consistently.' Anderson has missed time in the first three games with ankle, toe and head injuries. He has managed to play through all three ailments, but he and the rest of the Broncos running attack has struggled. The positive to take away from these comments is it sounds like Anderson is still the lead back over Ronnie Hillman. Anderson will be a low-end RB2 against the Vikings this week.")

		new RB( "Eddie Lacy", 
				"Green Bay Packers", 
				12, 
				[16.90 , 0.90, 10.20], 
				{week1: "Baltimore Ravens", week2: "Kansas City Chiefs", week3: "Detroit Lions", week4: "Minnesota Vikings"},	
				"'We have to keep C.J. on the field. C.J. has been coming off the field the past three games because he's been nicked up,' Kubiak said. 'Things are going on, and we need to keep him on the field consistently.' Anderson has missed time in the first three games with ankle, toe and head injuries. He has managed to play through all three ailments, but he and the rest of the Broncos running attack has struggled. The positive to take away from these comments is it sounds like Anderson is still the lead back over Ronnie Hillman. Anderson will be a low-end RB2 against the Vikings this week.")

		new RB( "Karlos Williams", 
				"Buffalo Bills", 
				17, 
				[11.50 , 10.70, 22.00], 
				{week1: "Baltimore Ravens", week2: "Kansas City Chiefs", week3: "Detroit Lions", week4: "Minnesota Vikings"},	
				"'We have to keep C.J. on the field. C.J. has been coming off the field the past three games because he's been nicked up,' Kubiak said. 'Things are going on, and we need to keep him on the field consistently.' Anderson has missed time in the first three games with ankle, toe and head injuries. He has managed to play through all three ailments, but he and the rest of the Broncos running attack has struggled. The positive to take away from these comments is it sounds like Anderson is still the lead back over Ronnie Hillman. Anderson will be a low-end RB2 against the Vikings this week.")
		new RB( "Demarco Murray", 
				"Philadelphia Eagles", 
				7, 
				[6.80 , 3.40, 3.20], 
				{week1: "Baltimore Ravens", week2: "Kansas City Chiefs", week3: "Detroit Lions", week4: "Minnesota Vikings"},	
				"'We have to keep C.J. on the field. C.J. has been coming off the field the past three games because he's been nicked up,' Kubiak said. 'Things are going on, and we need to keep him on the field consistently.' Anderson has missed time in the first three games with ankle, toe and head injuries. He has managed to play through all three ailments, but he and the rest of the Broncos running attack has struggled. The positive to take away from these comments is it sounds like Anderson is still the lead back over Ronnie Hillman. Anderson will be a low-end RB2 against the Vikings this week.")

		new RB( "Matt Forte", 
				"Chicago Bears", 
				12, 
				[16.90 , 0.90, 10.20], 
				{week1: "Baltimore Ravens", week2: "Kansas City Chiefs", week3: "Detroit Lions", week4: "Minnesota Vikings"},	
				"'We have to keep C.J. on the field. C.J. has been coming off the field the past three games because he's been nicked up,' Kubiak said. 'Things are going on, and we need to keep him on the field consistently.' Anderson has missed time in the first three games with ankle, toe and head injuries. He has managed to play through all three ailments, but he and the rest of the Broncos running attack has struggled. The positive to take away from these comments is it sounds like Anderson is still the lead back over Ronnie Hillman. Anderson will be a low-end RB2 against the Vikings this week.")

		new RB( "Marshawn Lynch", 
				"Seattle Seahawks", 
				17, 
				[11.50 , 10.70, 22.00], 
				{week1: "Baltimore Ravens", week2: "Kansas City Chiefs", week3: "Detroit Lions", week4: "Minnesota Vikings"},	
				"'We have to keep C.J. on the field. C.J. has been coming off the field the past three games because he's been nicked up,' Kubiak said. 'Things are going on, and we need to keep him on the field consistently.' Anderson has missed time in the first three games with ankle, toe and head injuries. He has managed to play through all three ailments, but he and the rest of the Broncos running attack has struggled. The positive to take away from these comments is it sounds like Anderson is still the lead back over Ronnie Hillman. Anderson will be a low-end RB2 against the Vikings this week.")

		return {
			RB: RB,
			rbList: rbList
		}

	})

// WR FACTORY

angular.module('fantasy')
	.factory('wrFactory', function(){

		var wrList = []

		var WR = function(name, team, projected, points, opponents, news, image){

			this.name = name,
			this.team = team,
			this.projected = projected,
			this.points = points
			this.totalPoints = Math.floor(points.reduce(function(total, num){ return total + num }
  				, 0))
			this.chart = createChart(this.points)
			this.news = news
			this.image = image

			wrList.push(this)

		}

		var createChart = function(points){
				var newchart = [[]]
				for(each in points){
					newchart[0].push(points[each])
				}
				newchart.push([7.26, 17.4, 18.6])
				return newchart
		}


		new WR("Demaryius Thomas", "Denver Broncos", 17, [9.50 , 18.60, 19.70], {week1: "Baltimore Ravens", week2: "Kansas City Chiefs", week3: "Detroit Lions", week4: "Minnesota Vikings"}, "Thomas beat Lions CB Darius Slay for a 45-yard touchdown at the end of the first half. It was his best game to date, though he was limited to three second-half catches and also lost a fumble. Thomas will remain a high-end WR1 against a Vikings defense that could be without top CB Xavier Rhodes in Week 4")
		new WR("Randall Cobb", "Green Bay Packers", 17, [12.30 , 18.60, 31.80], {week1: "Chicago Bears", week2: "Seattle Seahwaks", week3: "Kansas City Chiefs", week4: "San Francisco 49ers"}, "He had a fourth touchdown called back on a ticky-tack, new-emphasis offensive pass interference call when Ty Montgomery was whistled for blocking on a WR screen play too early. Still, Cobb dominated out of the slot, especially after the Chiefs lost slot CB Phillip Gaines early in the first quarter to a knee sprain. The Chiefs were then forced to use stiff safety Tyvon Branch to cover the shifty Cobb. And Cobb whipped him on his very first play for a short touchdown. All three of Cobb's touchdowns came of short passes where he just beat the defensive backs to the end zone. Cobb will be a WR1 next week in San Francisco")
		new WR("Sammy Watkins", "Buffalo Bills", 6, [0, 15, 4.4], {week1: 17.9 , week2: 25.98, week3: 24.28}, "NFL Network's Ian Rapoport has reported Watkins' strain is 'mild,' but he spent the second half of Sunday\'s win in street clothes. Always banged up, we\'d put Watkins\' odds of suiting up for Week 4 at no better than 50-50")
		new WR("Odell Beckham Jr", "New York Giants", 17, [9.50 , 18.60, 19.70], {week1: "Baltimore Ravens", week2: "Kansas City Chiefs", week3: "Detroit Lions", week4: "Minnesota Vikings"}, "Thomas beat Lions CB Darius Slay for a 45-yard touchdown at the end of the first half. It was his best game to date, though he was limited to three second-half catches and also lost a fumble. Thomas will remain a high-end WR1 against a Vikings defense that could be without top CB Xavier Rhodes in Week 4")
		new WR("James Jones", "Green Bay Packers", 17, [12.30 , 18.60, 31.80], {week1: "Chicago Bears", week2: "Seattle Seahwaks", week3: "Kansas City Chiefs", week4: "San Francisco 49ers"}, "He had a fourth touchdown called back on a ticky-tack, new-emphasis offensive pass interference call when Ty Montgomery was whistled for blocking on a WR screen play too early. Still, Cobb dominated out of the slot, especially after the Chiefs lost slot CB Phillip Gaines early in the first quarter to a knee sprain. The Chiefs were then forced to use stiff safety Tyvon Branch to cover the shifty Cobb. And Cobb whipped him on his very first play for a short touchdown. All three of Cobb's touchdowns came of short passes where he just beat the defensive backs to the end zone. Cobb will be a WR1 next week in San Francisco")
		new WR("Julio Jones", "Atlanta Falcons", 6, [0, 15, 4.4], {week1: 17.9 , week2: 25.98, week3: 24.28}, "NFL Network's Ian Rapoport has reported Watkins' strain is 'mild,' but he spent the second half of Sunday\'s win in street clothes. Always banged up, we\'d put Watkins\' odds of suiting up for Week 4 at no better than 50-50")

		return {
			WR: WR,
			wrList: wrList
		}

	})

angular.module("fantasy").controller("LineCtrl", ['$scope','userFactory', 'qbFactory', 'rbFactory', 'wrFactory', function ($scope, userFactory, qbFactory, rbFactory, wrFactory) {

  $scope.labels = ["Week 1", "Week 2", "Week 3"]
  $scope.series = ['Player', 'Average']
  $scope.onClick = function (points, evt) {
    console.log(points, evt)
  }
}])

angular.module("fantasy").controller("DoughnutCtrl",['$scope', 'userFactory', function ($scope, userFactory) {
  $scope.labels = ["Above Projection", "At Projection", "Under Projection"]
  $scope.data = [1, 1, 1]
}])

angular.module('fantasy')
	.controller('MainController', ['$scope', 'userFactory', 'qbFactory', 'rbFactory', 'wrFactory', function($scope, userFactory, qbFactory, rbFactory, wrFactory){
		
		

		$scope.comparePlayers = function(){
			for(each in $scope.playersToCompare){
				console.log($scope.playersToCompare[each])
				$scope.showCompare = true
			}
		}

		

		$scope.toCompare = qbFactory.compareList

		$scope.addToCompare = function(player){
			console.log($scope.toCompare)
			$scope.toCompare.push(player)
		}


		$scope.showCompare = false

		$scope.newName = ''
		$scope.newEmail = ''
		$scope.newPassword = ''

		$scope.confirmChange = false

		$scope.showNews = false

		$scope.showQB = true

		$scope.showRB = false

		$scope.showWR = false

		$scope.currentUser = userFactory.userList[0]

		$scope.playerToAdd = ''

		$scope.playersToDrop = []

		$scope.allQB = qbFactory.qbList

		$scope.allRB = rbFactory.rbList

		$scope.allWR = wrFactory.wrList


		$scope.userTest = function(){
			new userFactory.User($scope.newName, $scope.newEmail, $scope.newPassword)
			// console.log(userFactory.userList)
			$scope.newName = ''
			$scope.newEmail = ''
			$scope.newPassword = ''
		}

		$scope.addToRoster = function(position, player){

			$scope.playerToAdd = player.name

			var checkForPreviousUse = function(){
				for(each in $scope.currentUser.playersUsed[position]){
					if($scope.currentUser.playersUsed[position][each] === player){
						return true
					}
				}
			}
				if(checkForPreviousUse()){
					console.log('This player has already been used')
				}
				else if(position === 'qb' && $scope.currentUser.currentTeam[position] !== ''){
					console.log("You must remove a player")
					$scope.confirmChange = true
				} else if(position == "wr1" && $scope.currentUser.currentTeam.wr2 !== ''){
					$scope.currentUser.currentTeam.flex = player
					$scope.currentUser.playersUsed[position].push(player.name)
					// console.log(player)
				} else if (position === "wr1" && $scope.currentUser.currentTeam[position] !==''){
					$scope.currentUser.currentTeam.wr2 = player
					$scope.currentUser.playersUsed[position].push(player)
				} else if ((position === 'rb' || position === 'wr') && $scope.currentUser.currentTeam[position] !== ''){
					$scope.currentUser.currentTeam.flex = player
					$scope.currentUser.playersUsed[position].push(player)
				}else {
					$scope.currentUser.currentTeam[position] = player
					$scope.currentUser.playersUsed[position].push(player.name)
				}	
		}

		$scope.checkForMatch = function(wr){
				for(each in $scope.currentUser.playersUsed){
					// console.log($scope.currentUser.playersUsed[each])
					// console.log(wr.name)
					if($scope.currentUser.playersUsed[each] == wr.name){
						return true
					}
				}
			}
			

		$scope.isMatch = true

		$scope.toggleQB = function(){
			if($scope.showQB === false){
				$scope.showQB = true
			}
			$scope.showRB = false
			$scope.showWR = false
		}

		$scope.toggleRB = function(){
			if($scope.showRB === false){
				$scope.showRB = true
			}
			$scope.showQB = false
			$scope.showWR = false
		}

		$scope.toggleWR = function(){
			if($scope.showWR === false){
				$scope.showWR = true
			}
			$scope.showQB = false
			$scope.showRB = false
		}

		$scope.removePlayer = function(key, player){
			$scope.currentUser.currentTeam[key] = ''

		}
	}])

