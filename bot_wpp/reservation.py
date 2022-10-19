import uuid

class Reservation:
    """reservation class"""
    def __init__(self, idUser, idRestaurant, date, time, guests):
        self.idUser= idUser
        self.idRestaurant = idRestaurant
        self.date = date
        self.time = time
        self.guests = guests
    
    @property
    def idUser(self):
        """ getter """
        return self.__idUser
    
    @idUser.setter
    def idUser(self, x):
        """ setter """
        self.__idUser = x
        
    @property
    def idRestaurant(self):
        """ getter """
        return self.__idRestaurant
    
    @idRestaurant.setter
    def idRestaurant(self, x):
        """ setter """
        self.__idRestaurant = x
        
    @property
    def date(self):
        """ getter """
        return self.__date
    
    @date.setter
    def date(self, x):
        """ setter """
        self.__date = x
    
    @property
    def time(self):
        """ getter """
        return self.__time
    
    @time.setter
    def time(self, x):
        """ setter """
        self.__time = x
        
    @property
    def guests(self):
        """ getter """
        return self.__guests
    
    @guests.setter
    def guests(self, x):
        """ setter """
        self.__guests = x
        
    def to_dict(self):
        print("to dict")
        dic = {}
        dic["idUser"] = self.idUser
        dic["idRestaurant"] = self.idRestaurant
        dic["date"] = self.date
        dic["time"] = self.time
        dic["guests"] = self.guests
        return dic    
     
    def __str__(self):
        return (f"Día {self.time}, Hora: {self.date}, Cantidad de personas: {self.guests}.")
    
    