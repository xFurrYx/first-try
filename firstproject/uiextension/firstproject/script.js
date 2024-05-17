function exportCalendarEvents() {
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var calendarId = '2a822a9fb9ef7efe438887116b804a1108e329235d1d5c7356d104ddf4f230a5@group.calendar.google.com';
    var sheetName = 'dane';
  
    var calendar = CalendarApp.getCalendarById(calendarId);
    if (!calendar) {
      throw new Error('Calendar not found with the provided ID.');
    }
  
    var events = calendar.getEvents(new Date('2024-02-27T00:00:00Z'), new Date('2024-04-31T00:00:00Z'), {
      search: ''
    });
  
    var data = [
      ['Event ID', 'Event Name', 'Start Time', 'End Time', 'Description', 'Start Hour', 'End Hour', 'Guests', 'Calendar', 'Location']
    ];
  
    for (var i = 0; i < events.length; i++) 
    {
      var event = events[i];
      var startTime = event.getStartTime();
      var endTime = event.getEndTime();
  
      var startHour = startTime.getHours() + ':' + ('0' + startTime.getMinutes()).slice(-2);
      var endHour = endTime.getHours() + ':' + ('0' + endTime.getMinutes()).slice(-2);
  
      var guests = [];
      event.getGuestList().forEach(function(guest) {
        var contact = ContactsApp.getContactsByEmailAddress(guest.getEmail())[0];
        if (contact) {
          guests.push(contact.getFullName());
        } else {
          guests.push(guest.getEmail());
        }
      });
  
      var calendarName = CalendarApp.getCalendarById(event.getOriginalCalendarId()).getName();
      var location = event.getLocation();
  
      data.push([
        event.getId(),
        event.getTitle(),
        startTime,
        endTime,
        event.getDescription(),
        startHour,
        endHour,
        guests.join(', '),
        calendarName,
        location
      ]);
    }
  
    var sheet = spreadsheet.getSheetByName(sheetName);
    sheet.getRange(1, 1, data.length, data[0].length).setValues(data);
  }