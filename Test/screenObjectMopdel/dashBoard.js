class DashBoardPage {
    //SideBar
  get hamburger() {
    return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]');
  }
  get dashBoard() {
    return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[4]/android.view.View/android.view.View[1]');
  }

  get dashboardCardName() {
    return $('');
  }

  get contactSupport() {
    return $('');
  }

  get mail() {
    return $('');
  }
  get phone() {
    return $('');
  }
  get callerOption() {
    return $('');
  }
 
  get logout() {
    return $('');
  }
  get signOutConfirmationText() {
    return $('');
  }
  get proceed() {
    return $('');
  }
  get ok() {
    return $('');
  }
  get signOutcancel() {
    return $('');
  }
  get signOutPopUpclose() {
    return $('');
  }
  get dashBoardClose() {
    return $('');
  }
  get profileAvatar() {
    return $('//android.widget.TextView[@text="Hello Naga Badri,"]');
  }
  get dashBoardScrollingElement() {
    return $('//android.widget.ScrollView');
}






  //trainUp
  get trainUp() 
  {
    return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[2]');
  }





    //JumpBackIN
    get continue() {
        return $('//android.widget.TextView[@text="Continue"]');
    }
    get jumpBackInContinue() {
        return $('//android.widget.TextView[@text="Continue"]');
    }
   
    get ModelSelectionCofirmationText() {
        return $('//android.widget.TextView[@text="Choose a model to continue"]');
    }
    get rolePlay() {
        return $('//android.widget.TextView[@text="Role Play"]');
    }
    get virtualPatient() {
        return $('//android.widget.TextView[@text="Virtual Patient"]');
    }
    get jumpBackInScrollingElement() {
        return $('//android.widget.ScrollView/android.view.View[1]');
    }
    get jumpBackInPopUpClise() {
        return $('//android.widget.TextView[@text="X"]');
    }



  //Quick Access
    get quickAccess() {
        return $('//android.widget.TextView[@text="Quick Cases"]');
    }
    get quickAccessScrollingElement() {
        return $('//android.widget.ScrollView/android.view.View[2]');
    }
    get startTest() {
        return $('//android.widget.TextView[@text="Start Test"]');
    }

    //OSCE 
    get osce() {
        return $('//android.widget.TextView[@text="OSCE"]');
    }
    get cases() {
        return $('//android.widget.TextView[@text="Cases"]');
    }
    get stations() {
        return $('//android.widget.TextView[@text="Stations"]');
    }
    get circuits() {
        return $('//android.widget.TextView[@text="Circuits"]');
    }
    get ViewMoreForCases() {
        return $('(//android.widget.TextView[@text="View More"])[2]');
    }
    get ViewMoreForStations() {
        return $('(//android.widget.TextView[@text="View More"])[3]');
    }
    get ViewMoreForCircuits() {
        return $('(//android.widget.TextView[@text="View More"])[4]');
    }
    get casesScrollView() {
        return $('//android.widget.ScrollView/android.view.View[1]');
    }
    get stationsScrollView() {
        return $('//android.widget.ScrollView/android.view.View[2]');
    }
    get circuitsScrollView() {
        return $('//android.widget.ScrollView/android.view.View[3]');
    }
    get casePlay(){
        return $('//android.widget.ScrollView/android.view.View[1]/android.view.View')
    }
    get stationPlay(){
        return $('//android.widget.ScrollView/android.view.View[2]/android.view.View')
    }
    get circuitsPlay(){
        return $('//android.widget.ScrollView/android.view.View[3]/android.view.View')
    }



    // Helper methods for actions
    async dashBoardFlow(){
      await verifyAndClick(this.hamburger);
      console.log('Hamburger icon clicked');
      await verify(this.dashboardCardName)
      console.log('Dashboard card name verified');
      await verify(this.mail)
        console.log('Mail verified');
      await verify(this.phone)
        console.log('Phone number verified');
      await verify(this.contactSupport) 
        console.log('Contact support verified');
      await verifyAndClick(this.logout)
        console.log('Logout icon clicked');
      await verify(this.signOutConfirmationText)
        console.log('Sign out confirmation text verified');
      await verify(this.ok)
        console.log('Sign out confirmation verified');
      await verifyAndClick(this.signOutcancel)
        console.log('Sign out cancelled');
      await verifyAndClick(this.logout)
        console.log('Logout icon clicked');
      await verifyAndClick(this.signOutPopUpclose)
        console.log('Sign out pop up closed');
      await verifyAndClick(this.dashBoardClose)
        console.log('Dashboard close icon clicked');
    }
}
export default new DashBoardPage();